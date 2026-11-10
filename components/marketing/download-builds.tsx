"use client";

import { useState } from "react";
import {
  detectBuildIdFromClientHints,
  detectBuildIdFromUserAgent,
} from "@/lib/detect-build";
import { resolveAndroidApkUrls } from "@/lib/github-apk";
import type { BuildId, DownloadBuild } from "@/lib/site";
import { useMountEffect } from "@/lib/use-mount-effect";

async function detectBuildId(): Promise<BuildId> {
  const userAgent = navigator.userAgent;
  // 先看 UA 里的 Android。部分浏览器的 Client Hints 会把平台报成 Linux。
  if (/Android/i.test(userAgent)) return "android-arm64";

  const userAgentData = (
    navigator as Navigator & {
      userAgentData?: {
        getHighEntropyValues?: (hints: string[]) => Promise<{
          architecture?: string;
          platform?: string;
        }>;
      };
    }
  ).userAgentData;
  if (typeof userAgentData?.getHighEntropyValues === "function") {
    try {
      const hints = await userAgentData.getHighEntropyValues([
        "architecture",
        "platform",
      ]);
      const fromHints = detectBuildIdFromClientHints(hints);
      if (fromHints) return fromHints;
    } catch {
      return detectBuildIdFromUserAgent(userAgent);
    }
  }
  return detectBuildIdFromUserAgent(userAgent);
}

interface DownloadBuildsProps {
  builds: readonly DownloadBuild[];
  labels: Record<BuildId, { label: string; note: string }>;
  recommendedLabel: string;
  actionLabel: string;
  desktopHeading: string;
  androidHeading: string;
}

export function DownloadBuilds({
  builds,
  labels,
  recommendedLabel,
  actionLabel,
  desktopHeading,
  androidHeading,
}: DownloadBuildsProps) {
  const [recommended, setRecommended] = useState<BuildId>(
    () => builds[0]?.id ?? "mac-arm64",
  );
  const [assetUrls, setAssetUrls] = useState<Record<string, string>>({});

  useMountEffect(() => {
    let cancelled = false;
    void detectBuildId().then((id) => {
      if (cancelled) return;
      if (builds.some((build) => build.id === id)) setRecommended(id);
    });
    void resolveAndroidApkUrls().then((urls) => {
      if (cancelled || !urls) return;
      setAssetUrls(urls);
    });
    return () => {
      cancelled = true;
    };
  });

  const hrefFor = (build: DownloadBuild) =>
    assetUrls[build.fileName] ?? build.href;
  const desktop = builds.filter((build) => build.kind === "desktop");
  const android = builds.filter((build) => build.kind === "android");
  const groups = (
    recommended.startsWith("android")
      ? [
          { heading: androidHeading, items: android },
          { heading: desktopHeading, items: desktop },
        ]
      : [
          { heading: desktopHeading, items: desktop },
          { heading: androidHeading, items: android },
        ]
  ).filter((group) => group.items.length > 0);

  return (
    <div className="grid gap-10">
      {groups.map((group) => (
        <section key={group.heading} className="grid gap-4">
          <h2 className="m-0 font-semibold text-sm tracking-tight">
            {group.heading}
          </h2>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {group.items.map((build) => {
              const isRecommended = build.id === recommended;
              return (
                <li key={build.id}>
                  <a
                    href={hrefFor(build)}
                    className={`group grid h-full gap-4 rounded-xl border bg-fd-card p-5 text-fd-foreground no-underline transition-colors focus-visible:outline-2 focus-visible:outline-fd-ring focus-visible:outline-offset-2 ${
                      isRecommended
                        ? "border-fd-primary/60 ring-1 ring-fd-primary/30"
                        : "border-fd-border hover:border-fd-foreground/30"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="min-w-0 font-mono text-[0.6875rem] text-fd-muted-foreground uppercase leading-relaxed tracking-[0.12em]">
                        {build.fileName}
                      </span>
                      {isRecommended && (
                        <span className="shrink-0 rounded-full bg-fd-primary px-2 py-0.5 text-[0.6875rem] text-fd-primary-foreground">
                          {recommendedLabel}
                        </span>
                      )}
                    </span>
                    <span className="grid gap-1">
                      <span className="font-semibold text-lg tracking-tight">
                        {labels[build.id].label}
                      </span>
                      <span className="text-fd-muted-foreground text-sm">
                        {labels[build.id].note}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-fd-primary text-sm">
                      ↓{" "}
                      <span className="group-hover:underline">
                        {actionLabel}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

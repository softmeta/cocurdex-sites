"use client";

import { useState } from "react";
import type { BuildId } from "@/lib/site";
import { useMountEffect } from "@/lib/use-mount-effect";

function detectBuildIdFromUserAgent() {
  const userAgent = navigator.userAgent;
  if (/Windows NT/i.test(userAgent)) return "win-x64";
  if (/Linux/i.test(userAgent) && !/Android/i.test(userAgent)) {
    return "linux-x64";
  }
  return "mac-arm64";
}

async function detectBuildId(): Promise<string> {
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
      const platform = String(hints.platform ?? "").toLowerCase();
      const architecture = String(hints.architecture ?? "").toLowerCase();
      if (platform.includes("win")) return "win-x64";
      if (platform.includes("linux")) return "linux-x64";
      if (platform.includes("mac")) {
        if (architecture.includes("x86") || architecture === "x64") {
          return "mac-x64";
        }
        return "mac-arm64";
      }
    } catch {
      return detectBuildIdFromUserAgent();
    }
  }
  return detectBuildIdFromUserAgent();
}

interface DownloadBuildsProps {
  builds: readonly { id: BuildId; href: string }[];
  labels: Record<BuildId, { label: string; note: string }>;
  recommendedLabel: string;
  actionLabel: string;
}

const fileExt: Record<BuildId, string> = {
  "mac-arm64": ".dmg",
  "mac-x64": ".dmg",
  "win-x64": ".exe",
  "linux-x64": ".AppImage",
};

export function DownloadBuilds({
  builds,
  labels,
  recommendedLabel,
  actionLabel,
}: DownloadBuildsProps) {
  const [recommended, setRecommended] = useState<BuildId>(builds[0].id);

  useMountEffect(() => {
    void detectBuildId().then((id) => {
      if (builds.some((build) => build.id === id)) {
        setRecommended(id as BuildId);
      }
    });
  });

  return (
    <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
      {builds.map((build) => {
        const isRecommended = build.id === recommended;
        return (
          <li key={build.id}>
            <a
              href={build.href}
              className={`group grid h-full gap-4 rounded-xl border bg-fd-card p-5 text-fd-foreground no-underline transition-colors focus-visible:outline-2 focus-visible:outline-fd-ring focus-visible:outline-offset-2 ${
                isRecommended
                  ? "border-fd-primary/60 ring-1 ring-fd-primary/30"
                  : "border-fd-border hover:border-fd-foreground/30"
              }`}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="font-mono text-[0.6875rem] text-fd-muted-foreground uppercase tracking-[0.12em]">
                  {build.id}
                  {fileExt[build.id]}
                </span>
                {isRecommended && (
                  <span className="rounded-full bg-fd-primary px-2 py-0.5 text-[0.6875rem] text-fd-primary-foreground">
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
                ↓ <span className="group-hover:underline">{actionLabel}</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

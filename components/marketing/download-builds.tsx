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

const primaryButton =
  "inline-flex min-h-10 items-center justify-center rounded-md bg-fd-foreground px-4 py-2 font-medium text-[0.9375rem] text-fd-background no-underline hover:opacity-90";
const secondaryButton =
  "inline-flex min-h-10 items-center justify-center rounded-md border border-fd-border bg-fd-card px-4 py-2 font-medium text-[0.9375rem] text-fd-foreground no-underline hover:border-fd-foreground/30";

interface DownloadBuildsProps {
  builds: readonly { id: BuildId; href: string }[];
  labels: Record<BuildId, { label: string; note: string }>;
}

export function DownloadBuilds({ builds, labels }: DownloadBuildsProps) {
  const [recommended, setRecommended] = useState<BuildId>(builds[0].id);

  useMountEffect(() => {
    void detectBuildId().then((id) => {
      if (builds.some((build) => build.id === id)) {
        setRecommended(id as BuildId);
      }
    });
  });

  return (
    <ul className="mt-7 grid list-none gap-4 p-0">
      {builds.map((build) => (
        <li key={build.id} className="grid justify-items-start gap-1.5">
          <a
            href={build.href}
            className={
              build.id === recommended ? primaryButton : secondaryButton
            }
          >
            {labels[build.id].label}
          </a>
          <p className="m-0 text-fd-muted-foreground text-sm">
            {labels[build.id].note}
          </p>
        </li>
      ))}
    </ul>
  );
}

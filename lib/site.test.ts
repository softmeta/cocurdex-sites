import { describe, expect, it } from "vitest";
import { dict as en } from "./marketing/en";
import { dict as zhCn } from "./marketing/zh-cn";
import {
  androidApkAssets,
  desktopDownloads,
  downloadBuilds,
  githubReleasesUrl,
} from "./site";

describe("download builds", () => {
  it("keeps desktop installers on /releases/latest", () => {
    for (const build of desktopDownloads) {
      expect(build.href).toContain(
        "https://github.com/softmeta/cocurdex/releases/latest/download/",
      );
    }
  });

  it("points Android cards at the releases index until the client resolves a real asset", () => {
    for (const asset of androidApkAssets) {
      const build = downloadBuilds.find((item) => item.id === asset.id);
      expect(build?.kind).toBe("android");
      expect(build?.fileName).toBe(asset.fileName);
      expect(build?.href).toBe(githubReleasesUrl);
      expect(build?.href.includes("/releases/latest/")).toBe(false);
    }
  });

  it("gives every build id a label in both locales", () => {
    for (const build of downloadBuilds) {
      expect(en.download.builds[build.id].label.length).toBeGreaterThan(0);
      expect(zhCn.download.builds[build.id].label.length).toBeGreaterThan(0);
    }
  });
});

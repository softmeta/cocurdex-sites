import { describe, expect, it } from "vitest";
import {
  detectBuildIdFromClientHints,
  detectBuildIdFromUserAgent,
} from "./detect-build";

const androidChrome =
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36";
const linuxDesktop =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const windowsDesktop =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const macSafari =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";

describe("detectBuildIdFromUserAgent", () => {
  it("recommends the arm64 APK when the UA is Android, even though it also says Linux", () => {
    expect(detectBuildIdFromUserAgent(androidChrome)).toBe("android-arm64");
  });

  it("keeps desktop Linux, Windows, and the Mac default", () => {
    expect(detectBuildIdFromUserAgent(linuxDesktop)).toBe("linux-x64");
    expect(detectBuildIdFromUserAgent(windowsDesktop)).toBe("win-x64");
    expect(detectBuildIdFromUserAgent(macSafari)).toBe("mac-arm64");
  });
});

describe("detectBuildIdFromClientHints", () => {
  it("recommends arm64 for Android regardless of the reported architecture", () => {
    expect(detectBuildIdFromClientHints({ platform: "Android" })).toBe(
      "android-arm64",
    );
    expect(
      detectBuildIdFromClientHints({
        platform: "Android",
        architecture: "x86",
      }),
    ).toBe("android-arm64");
  });

  it("maps desktop hints, including Intel Macs", () => {
    expect(detectBuildIdFromClientHints({ platform: "Linux" })).toBe(
      "linux-x64",
    );
    expect(detectBuildIdFromClientHints({ platform: "Windows" })).toBe(
      "win-x64",
    );
    expect(
      detectBuildIdFromClientHints({ platform: "macOS", architecture: "arm" }),
    ).toBe("mac-arm64");
    expect(
      detectBuildIdFromClientHints({ platform: "macOS", architecture: "x86" }),
    ).toBe("mac-x64");
  });

  it("returns null when the platform is missing or unknown", () => {
    expect(detectBuildIdFromClientHints({})).toBeNull();
    expect(detectBuildIdFromClientHints({ platform: "Chrome OS" })).toBeNull();
  });
});

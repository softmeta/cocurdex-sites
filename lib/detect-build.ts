import type { BuildId } from "./site";

export interface ClientHintValues {
  platform?: string;
  architecture?: string;
}

/**
 * 从 User-Agent 推断推荐安装包。
 * Android 的 UA 里同时有 Linux，必须先判断 Android，否则会落到桌面 Linux，
 * 再不然就落到默认的 mac-arm64。
 */
export function detectBuildIdFromUserAgent(userAgent: string): BuildId {
  if (/Android/i.test(userAgent)) return "android-arm64";
  if (/Windows NT/i.test(userAgent)) return "win-x64";
  if (/Linux/i.test(userAgent)) return "linux-x64";
  return "mac-arm64";
}

/** Client Hints 能识别时返回对应包；识别不了则返回 null，交给 UA。 */
export function detectBuildIdFromClientHints(
  hints: ClientHintValues,
): BuildId | null {
  const platform = String(hints.platform ?? "").toLowerCase();
  const architecture = String(hints.architecture ?? "").toLowerCase();
  if (!platform) return null;
  // 手机上固定推荐 arm64-v8a，不按 32 位架构改选。
  if (platform.includes("android")) return "android-arm64";
  if (platform.includes("win")) return "win-x64";
  if (platform.includes("linux")) return "linux-x64";
  if (platform.includes("mac")) {
    if (architecture.includes("x86") || architecture === "x64") {
      return "mac-x64";
    }
    return "mac-arm64";
  }
  return null;
}

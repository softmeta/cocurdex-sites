/** 公开营销站与文档站常量（静态导出）。 */
export const site = {
  name: "Cocurdex",
  url: "https://cocurdex.com",
  github: "https://github.com/softmeta/cocurdex",
  discord: "https://discord.gg/JuRyyv5bv",
  issues: "https://github.com/softmeta/cocurdex/issues",
  securityAdvisory:
    "https://github.com/softmeta/cocurdex/security/advisories/new",
  contactEmail: "optimus@softmeta.si",
  company: "softmeta LLC",
  // TODO(legal): set the verified geographic business address shown in
  // Google Play Console and the Google Payments profile. The EU e-Commerce
  // Directive (Art. 5) and UK E-Commerce Regulations 2002 (reg. 6) require it.
  postalAddress: null as string | null,
} as const;

const githubLatestDownload = (fileName: string) =>
  `https://github.com/softmeta/cocurdex/releases/latest/download/${fileName}`;

/** 全部 Release 的索引页。Android 直链解析失败时回退到这里。 */
export const githubReleasesUrl =
  "https://github.com/softmeta/cocurdex/releases";

/** 公开 Releases API，只读，用来找真正带上 APK 的版本。 */
export const githubReleasesApiUrl =
  "https://api.github.com/repos/softmeta/cocurdex/releases";

/** 桌面安装包 id 与地址；文案在 lib/marketing。桌面端继续用 /releases/latest。 */
export const desktopDownloads = [
  {
    id: "mac-arm64",
    href: githubLatestDownload("Cocurdex-mac-arm64.dmg"),
  },
  {
    id: "mac-x64",
    href: githubLatestDownload("Cocurdex-mac-x64.dmg"),
  },
  {
    id: "win-x64",
    href: githubLatestDownload("Cocurdex-win-x64.exe"),
  },
  {
    id: "linux-x64",
    href: githubLatestDownload("Cocurdex-linux-x64.AppImage"),
  },
  {
    id: "linux-x64-deb",
    href: githubLatestDownload("Cocurdex-linux-x64.deb"),
  },
] as const;

/**
 * 实际随 Release 发布的两份 Android APK。
 * 不要用 /releases/latest/download：那个地址指向最新的非预发布版本，
 * 目前只有桌面安装包，这两个文件名会 404。
 */
export const androidApkAssets = [
  {
    id: "android-arm64",
    fileName: "Cocurdex-android-arm64-v8a.apk",
  },
  {
    id: "android-armv7",
    fileName: "Cocurdex-android-armeabi-v7a.apk",
  },
] as const;

export type DesktopBuildId = (typeof desktopDownloads)[number]["id"];
export type AndroidBuildId = (typeof androidApkAssets)[number]["id"];
export type BuildId = DesktopBuildId | AndroidBuildId;
export type DownloadKind = "desktop" | "android";

export interface DownloadBuild {
  id: BuildId;
  href: string;
  fileName: string;
  kind: DownloadKind;
}

function fileNameFromHref(href: string) {
  return href.slice(href.lastIndexOf("/") + 1);
}

/** 下载卡片。Android 的 href 先指向发布列表，挂载后再解析成具体文件。 */
export const downloadBuilds: readonly DownloadBuild[] = [
  ...desktopDownloads.map((build) => ({
    id: build.id,
    href: build.href,
    fileName: fileNameFromHref(build.href),
    kind: "desktop" as const,
  })),
  ...androidApkAssets.map((build) => ({
    id: build.id,
    href: githubReleasesUrl,
    fileName: build.fileName,
    kind: "android" as const,
  })),
];

export const githubLatestReleaseUrl =
  "https://github.com/softmeta/cocurdex/releases/latest";

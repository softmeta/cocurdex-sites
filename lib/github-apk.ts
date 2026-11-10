import { androidApkAssets, githubReleasesApiUrl } from "./site";

export interface GithubReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface GithubRelease {
  draft?: boolean;
  assets?: readonly GithubReleaseAsset[];
}

const DOWNLOAD_PREFIX =
  "https://github.com/softmeta/cocurdex/releases/download/";

/** 只接受带具体 tag 的资源直链，拒绝 /releases/latest。 */
export function isDirectReleaseAssetUrl(
  url: string,
  fileName: string,
): boolean {
  if (!url.startsWith(DOWNLOAD_PREFIX)) return false;
  if (url.includes("/releases/latest/")) return false;
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname === "github.com" &&
      parsed.pathname.endsWith(`/${fileName}`) &&
      !parsed.pathname.includes("/latest/")
    );
  } catch {
    return false;
  }
}

/**
 * 在按发布时间倒序的列表里，取最新一份同时包含全部目标文件的非草稿版本。
 * 预发布版本可以入选。草稿跳过。
 */
export function findReleaseAssetUrls(
  releases: readonly GithubRelease[],
  assetNames: readonly string[],
): Record<string, string> | null {
  if (assetNames.length === 0) return null;
  for (const release of releases) {
    if (release.draft) continue;
    const urls: Record<string, string> = {};
    for (const name of assetNames) {
      const asset = release.assets?.find((item) => item.name === name);
      const url = asset?.browser_download_url;
      if (url && isDirectReleaseAssetUrl(url, name)) urls[name] = url;
    }
    if (assetNames.every((name) => urls[name])) return urls;
  }
  return null;
}

const MAX_PAGES = 4;
const PER_PAGE = 30;

function readReleases(data: unknown): GithubRelease[] | null {
  if (!Array.isArray(data)) return null;
  return data.map((item) => {
    if (!item || typeof item !== "object") return { assets: [] };
    const record = item as Record<string, unknown>;
    const assets = Array.isArray(record.assets)
      ? record.assets.flatMap((asset) => {
          if (!asset || typeof asset !== "object") return [];
          const row = asset as Record<string, unknown>;
          if (
            typeof row.name !== "string" ||
            typeof row.browser_download_url !== "string"
          ) {
            return [];
          }
          return [
            {
              name: row.name,
              browser_download_url: row.browser_download_url,
            },
          ];
        })
      : [];
    return { draft: record.draft === true, assets };
  });
}

/**
 * 向 GitHub Releases API 查找同时包含两份 APK 的最新已发布版本。
 * 网络、权限或响应异常时返回 null，调用方回退到发布列表页。
 */
export async function resolveAndroidApkUrls(
  fetcher: typeof fetch = fetch,
): Promise<Record<string, string> | null> {
  const names = androidApkAssets.map((asset) => asset.fileName);
  for (let page = 1; page <= MAX_PAGES; page++) {
    let response: Response;
    try {
      response = await fetcher(
        `${githubReleasesApiUrl}?per_page=${PER_PAGE}&page=${page}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        },
      );
    } catch {
      return null;
    }
    if (!response.ok) return null;
    let data: unknown;
    try {
      data = await response.json();
    } catch {
      return null;
    }
    const releases = readReleases(data);
    if (!releases) return null;
    const found = findReleaseAssetUrls(releases, names);
    if (found) return found;
    if (releases.length < PER_PAGE) return null;
  }
  return null;
}

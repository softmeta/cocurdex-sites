import { describe, expect, it } from "vitest";
import {
  findReleaseAssetUrls,
  type GithubRelease,
  isDirectReleaseAssetUrl,
  resolveAndroidApkUrls,
} from "./github-apk";

const arm64 = "Cocurdex-android-arm64-v8a.apk";
const armv7 = "Cocurdex-android-armeabi-v7a.apk";
const names = [arm64, armv7];

function asset(name: string, tag: string) {
  return {
    name,
    browser_download_url: `https://github.com/softmeta/cocurdex/releases/download/${tag}/${name}`,
  };
}

function release(tag: string, files: string[], draft = false): GithubRelease {
  return {
    draft,
    assets: files.map((name) => asset(name, tag)),
  };
}

describe("isDirectReleaseAssetUrl", () => {
  it("accepts a tagged download URL and rejects /releases/latest", () => {
    expect(
      isDirectReleaseAssetUrl(
        "https://github.com/softmeta/cocurdex/releases/download/v0.1.103-beta.11/Cocurdex-android-arm64-v8a.apk",
        arm64,
      ),
    ).toBe(true);
    expect(
      isDirectReleaseAssetUrl(
        "https://github.com/softmeta/cocurdex/releases/latest/download/Cocurdex-android-arm64-v8a.apk",
        arm64,
      ),
    ).toBe(false);
  });
});

describe("findReleaseAssetUrls", () => {
  it("picks the newest non-draft release that contains both APKs", () => {
    const urls = findReleaseAssetUrls(
      [
        release("v0.1.103-beta.11", [arm64, `${arm64}.sha256`, armv7]),
        release("v0.1.103-beta.10", [arm64, armv7]),
      ],
      names,
    );
    expect(urls).toEqual({
      [arm64]:
        "https://github.com/softmeta/cocurdex/releases/download/v0.1.103-beta.11/Cocurdex-android-arm64-v8a.apk",
      [armv7]:
        "https://github.com/softmeta/cocurdex/releases/download/v0.1.103-beta.11/Cocurdex-android-armeabi-v7a.apk",
    });
  });

  it("skips drafts and releases that are missing one APK", () => {
    const urls = findReleaseAssetUrls(
      [
        release("v-draft", [arm64, armv7], true),
        release("v-partial", [arm64]),
        release("v-ok", [armv7, arm64]),
      ],
      names,
    );
    expect(urls?.[arm64]).toContain("/download/v-ok/");
    expect(urls?.[armv7]).toContain("/download/v-ok/");
  });

  it("rejects a release whose asset URLs use /releases/latest", () => {
    const urls = findReleaseAssetUrls(
      [
        {
          draft: false,
          assets: [
            {
              name: arm64,
              browser_download_url: `https://github.com/softmeta/cocurdex/releases/latest/download/${arm64}`,
            },
            {
              name: armv7,
              browser_download_url: `https://github.com/softmeta/cocurdex/releases/latest/download/${armv7}`,
            },
          ],
        },
        release("v-ok", [arm64, armv7]),
      ],
      names,
    );
    expect(urls?.[arm64]).toContain("/download/v-ok/");
  });

  it("returns null when no release has both files", () => {
    expect(findReleaseAssetUrls([release("v-none", [])], names)).toBeNull();
  });
});

describe("resolveAndroidApkUrls", () => {
  it("reads later pages when the newest page has no complete APK set", async () => {
    const fetcher = (async (input: RequestInfo | URL) => {
      const url = String(input);
      const page = new URL(url).searchParams.get("page");
      const body =
        page === "1"
          ? Array.from({ length: 30 }, (_, index) =>
              release(`v-partial-${index}`, [arm64]),
            )
          : [release("v0.1.103-beta.11", [arm64, armv7, `${arm64}.sha256`])];
      return new Response(JSON.stringify(body), { status: 200 });
    }) as typeof fetch;

    const urls = await resolveAndroidApkUrls(fetcher);
    expect(urls?.[arm64]).toContain("/v0.1.103-beta.11/");
    expect(urls?.[armv7]).toContain("/v0.1.103-beta.11/");
  });

  it("returns null when the API fails", async () => {
    const fetcher = (async () =>
      new Response("nope", { status: 403 })) as typeof fetch;
    expect(await resolveAndroidApkUrls(fetcher)).toBeNull();
  });

  it("returns null when the request throws", async () => {
    const fetcher = (async () => {
      throw new Error("offline");
    }) as typeof fetch;
    expect(await resolveAndroidApkUrls(fetcher)).toBeNull();
  });

  it("returns null when the body is not a release list", async () => {
    const fetcher = (async () =>
      new Response(JSON.stringify({ message: "bad" }), {
        status: 200,
      })) as typeof fetch;
    expect(await resolveAndroidApkUrls(fetcher)).toBeNull();
  });
});

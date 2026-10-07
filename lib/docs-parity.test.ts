import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = path.dirname(fileURLToPath(import.meta.url));
const enRoot = path.join(here, "../content/docs");
const zhRoot = path.join(here, "../content/docs-cn");
const separatorPattern = /^---.*---$/;

function listFiles(root: string, directory = root): string[] {
  return readdirSync(directory)
    .flatMap((name) => {
      const file = path.join(directory, name);
      if (statSync(file).isDirectory()) {
        return listFiles(root, file);
      }
      return [path.relative(root, file)];
    })
    .sort();
}

function isSeparator(value: unknown): value is string {
  return typeof value === "string" && separatorPattern.test(value);
}

describe("docs parity", () => {
  const enFiles = listFiles(enRoot);
  const zhFiles = listFiles(zhRoot);
  const enMetaFiles = enFiles.filter(
    (file) => path.basename(file) === "meta.json",
  );
  const zhMetaFiles = zhFiles.filter(
    (file) => path.basename(file) === "meta.json",
  );

  it("mirrors every file path between English and Chinese docs", () => {
    expect(zhFiles).toEqual(enFiles);
  });

  it("keeps paired meta pages aligned, allowing localized separators", () => {
    expect(zhMetaFiles).toEqual(enMetaFiles);

    for (const file of enMetaFiles) {
      if (!zhMetaFiles.includes(file)) continue;

      const enPages: unknown = JSON.parse(
        readFileSync(path.join(enRoot, file), "utf8"),
      ).pages;
      const zhPages: unknown = JSON.parse(
        readFileSync(path.join(zhRoot, file), "utf8"),
      ).pages;

      expect(Array.isArray(enPages)).toBe(true);
      expect(Array.isArray(zhPages)).toBe(true);
      if (!Array.isArray(enPages) || !Array.isArray(zhPages)) continue;

      expect(zhPages).toHaveLength(enPages.length);
      if (zhPages.length !== enPages.length) continue;

      for (const [index, enPage] of enPages.entries()) {
        const zhPage = zhPages[index];
        const enIsSeparator = isSeparator(enPage);
        const zhIsSeparator = isSeparator(zhPage);
        expect(zhIsSeparator).toBe(enIsSeparator);
        if (!enIsSeparator && !zhIsSeparator) {
          expect(zhPage).toBe(enPage);
        }
      }
    }
  });
});

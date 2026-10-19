import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const enRoot = path.join(repoRoot, "content/docs");
const zhRoot = path.join(repoRoot, "content/docs-cn");
const separatorPattern = /^---.*---$/;

function listFiles(root, directory = root) {
  return readdirSync(directory)
    .flatMap((name) => {
      const file = path.join(directory, name);
      if (statSync(file).isDirectory()) return listFiles(root, file);
      return [path.relative(root, file)];
    })
    .sort();
}

function isSeparator(value) {
  return typeof value === "string" && separatorPattern.test(value);
}

/** 对比一对 meta.json 的 pages。分隔符允许翻译，其余条目必须相同。 */
export function pagesAligned(enPages, zhPages) {
  if (!Array.isArray(enPages) || !Array.isArray(zhPages)) {
    return "pages 不是数组";
  }
  if (enPages.length !== zhPages.length) {
    return `pages 长度不一致：EN ${enPages.length}，zh-CN ${zhPages.length}`;
  }
  for (const [index, enPage] of enPages.entries()) {
    const zhPage = zhPages[index];
    const enIsSeparator = isSeparator(enPage);
    const zhIsSeparator = isSeparator(zhPage);
    if (enIsSeparator !== zhIsSeparator) {
      return `pages[${index}] 一边是分隔符，另一边不是`;
    }
    if (!enIsSeparator && enPage !== zhPage) {
      return `pages[${index}] 不一致：EN ${JSON.stringify(enPage)}，zh-CN ${JSON.stringify(zhPage)}`;
    }
  }
  return null;
}

/** 每个英文文档页都要有中文对应页，反之亦然。 */
export function checkDocsParity() {
  const errors = [];
  const enFiles = listFiles(enRoot);
  const zhFiles = listFiles(zhRoot);
  const enSet = new Set(enFiles);
  const zhSet = new Set(zhFiles);

  for (const file of enFiles) {
    if (!zhSet.has(file))
      errors.push(`缺少 zh-CN 对应页：content/docs-cn/${file}`);
  }
  for (const file of zhFiles) {
    if (!enSet.has(file)) errors.push(`缺少 EN 对应页：content/docs/${file}`);
  }

  const metaFiles = enFiles.filter(
    (file) => path.basename(file) === "meta.json",
  );
  for (const file of metaFiles) {
    if (!zhSet.has(file)) continue;
    const enPages = JSON.parse(
      readFileSync(path.join(enRoot, file), "utf8"),
    ).pages;
    const zhPages = JSON.parse(
      readFileSync(path.join(zhRoot, file), "utf8"),
    ).pages;
    const mismatch = pagesAligned(enPages, zhPages);
    if (mismatch) errors.push(`content/docs/${file}：${mismatch}`);
  }

  const summary = `EN 与 zh-CN 文档一致（${enFiles.length} 个文件，${metaFiles.length} 个 meta.json）。`;
  return { ok: errors.length === 0, errors, summary };
}

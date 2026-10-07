import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const outputDir = path.resolve(process.argv[2] ?? "out");
const tagPattern = /<([a-z][\w:-]*)\b([^<>]*?)>/gi;
const attributePattern =
  /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
const schemePattern = /^[a-z][a-z\d+.-]*:/i;

function unescapeAmpersands(value) {
  return value.replace(/&amp;/g, "&");
}

function attributesFor(tag) {
  const attributes = new Map();
  for (const match of tag.matchAll(attributePattern)) {
    const [, rawName, doubleQuoted, singleQuoted, unquoted] = match;
    const value = doubleQuoted ?? singleQuoted ?? unquoted ?? "";
    attributes.set(rawName.toLowerCase(), unescapeAmpersands(value));
  }
  return attributes;
}

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(file);
    return entry.isFile() && entry.name.endsWith(".html") ? [file] : [];
  });
}

function documentData(file) {
  const html = readFileSync(file, "utf8");
  const ids = new Set();
  const hrefs = [];

  for (const match of html.matchAll(tagPattern)) {
    const [, tagName, attributesText] = match;
    const attributes = attributesFor(attributesText);
    if (attributes.has("id")) ids.add(attributes.get("id"));
    if (
      (tagName.toLowerCase() === "a" || tagName.toLowerCase() === "link") &&
      attributes.has("href")
    ) {
      hrefs.push(attributes.get("href"));
    }
  }

  return { ids, hrefs };
}

function isInsideOutput(target) {
  const relative = path.relative(outputDir, target);
  return (
    relative !== ".." &&
    !relative.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relative)
  );
}

function isFile(file) {
  return existsSync(file) && statSync(file).isFile();
}

function targetHtml(pathname, page) {
  const target = pathname
    ? path.resolve(
        pathname.startsWith("/") ? outputDir : path.dirname(page),
        pathname.replace(/^\/+/, ""),
      )
    : page;

  if (!isInsideOutput(target)) {
    return { error: "target escapes output directory" };
  }
  if (pathname.endsWith("/")) {
    const index = path.join(target, "index.html");
    return isFile(index)
      ? { file: index }
      : { error: "target index.html not found" };
  }
  if (isFile(target)) return { file: target };
  if (isFile(`${target}.html`)) return { file: `${target}.html` };
  const index = path.join(target, "index.html");
  if (isFile(index)) return { file: index };
  return { error: "target file not found" };
}

function checkLink(page, href, documents) {
  if (href.startsWith("//") || schemePattern.test(href)) return null;

  let pathname;
  let fragment;
  const hashIndex = href.indexOf("#");
  const urlPath = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const rawFragment = hashIndex === -1 ? "" : href.slice(hashIndex + 1);

  try {
    pathname = decodeURIComponent(urlPath.split("?")[0]);
    fragment = decodeURIComponent(rawFragment);
  } catch {
    return `${path.relative(outputDir, page)} -> ${href} (invalid percent-encoding)`;
  }

  const target = targetHtml(pathname, page);
  if (target.error) {
    return `${path.relative(outputDir, page)} -> ${href} (${target.error})`;
  }
  if (fragment && !documents.get(target.file)?.ids.has(fragment)) {
    return `${path.relative(outputDir, page)} -> ${href} (fragment #${fragment} not found)`;
  }
  return null;
}

if (!existsSync(outputDir) || !statSync(outputDir).isDirectory()) {
  console.error(`${outputDir} -> (output directory not found)`);
  process.exit(1);
}

const pages = htmlFiles(outputDir);
const documents = new Map(pages.map((page) => [page, documentData(page)]));
const failures = [];
let linksChecked = 0;

for (const page of pages) {
  for (const href of documents.get(page).hrefs) {
    if (href.startsWith("//") || schemePattern.test(href)) continue;
    linksChecked++;
    const failure = checkLink(page, href, documents);
    if (failure) failures.push(failure);
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure);
  process.exit(1);
}

console.log(
  `Checked ${pages.length} pages and ${linksChecked} internal links.`,
);

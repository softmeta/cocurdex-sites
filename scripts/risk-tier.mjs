/** 变更风险等级。混合 diff 取最高一级。未列出的路径按中风险。 */

const RANK = { low: 0, medium: 1, high: 2 };

const HIGH_PATTERNS = [
  /^\.github\//,
  /^\.cursor\//,
  /^(?:package\.json|pnpm-lock\.yaml|pnpm-workspace\.yaml|\.npmrc)$/,
  /^(?:next\.config\.mjs|wrangler\.toml|postcss\.config\.mjs|source\.config\.ts|tsconfig\.json|biome\.json)$/,
  /^(?:AGENTS\.md|CODEOWNERS)$/,
  /^docs\/REVIEW-POLICY\.md$/,
];

const LOW_PATTERNS = [/^content\//, /^lib\/marketing\//, /^README\.md$/];

function normalize(file) {
  return file.replaceAll("\\", "/").replace(/^\.\//, "");
}

export function tierForPath(file) {
  const path = normalize(file);
  if (HIGH_PATTERNS.some((pattern) => pattern.test(path))) return "high";
  if (LOW_PATTERNS.some((pattern) => pattern.test(path))) return "low";
  return "medium";
}

export function classifyFiles(files) {
  const groups = { high: [], medium: [], low: [] };
  for (const file of files) groups[tierForPath(file)].push(file);
  let tier = "low";
  for (const file of files) {
    const next = tierForPath(file);
    if (RANK[next] > RANK[tier]) tier = next;
  }
  return { tier, groups };
}

const TIER_LINE = {
  low: "Low. Docs or marketing copy. The author is the only human required once CI and Bugbot are clear.",
  medium:
    "Medium. Layout, components, navigation, or i18n infrastructure. One human besides the author.",
  high: "High. CI, deploy/build config, dependencies, or review policy. Code owner required.",
};

export function formatReport(files) {
  const { tier, groups } = classifyFiles(files);
  const lines = [
    `Risk tier: ${tier}`,
    TIER_LINE[tier],
    "",
    `High (${groups.high.length})`,
    ...groups.high.map((file) => `- ${file}`),
    `Medium (${groups.medium.length})`,
    ...groups.medium.map((file) => `- ${file}`),
    `Low (${groups.low.length})`,
    ...groups.low.map((file) => `- ${file}`),
  ];
  if (files.length === 0) lines.push("", "No changed files.");
  return lines.join("\n");
}

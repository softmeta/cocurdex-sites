import { execFileSync } from "node:child_process";
import { appendFileSync } from "node:fs";
import { formatReport } from "./risk-tier.mjs";

const base = process.env.BASE_SHA;
const head = process.env.HEAD_SHA ?? "HEAD";

if (!base) {
  console.error("需要环境变量 BASE_SHA（PR 的 base sha）。");
  process.exit(1);
}

// 列出两端之间有改动的路径。风险等级只用于展示，不作为失败条件。
const output = execFileSync(
  "git",
  ["diff", "--name-only", "--diff-filter=ACDMRT", base, head],
  { encoding: "utf8" },
);
const files = output
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);
const report = formatReport(files);

console.log(report);

const summaryPath = process.env.GITHUB_STEP_SUMMARY;
if (summaryPath) {
  appendFileSync(summaryPath, `### Change risk\n\n\`\`\`\n${report}\n\`\`\`\n`);
}

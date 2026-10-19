import { describe, expect, it } from "vitest";
import { classifyFiles, formatReport, tierForPath } from "./risk-tier.mjs";

describe("risk tier", () => {
  it("treats docs and marketing copy as low", () => {
    expect(tierForPath("content/docs/cli.mdx")).toBe("low");
    expect(tierForPath("content/docs-cn/meta.json")).toBe("low");
    expect(tierForPath("lib/marketing/zh-cn.ts")).toBe("low");
    expect(tierForPath("README.md")).toBe("low");
  });

  it("treats layout, navigation, and i18n infrastructure as medium", () => {
    expect(tierForPath("components/marketing/shell.tsx")).toBe("medium");
    expect(tierForPath("app/zh-cn/docs/layout.tsx")).toBe("medium");
    expect(tierForPath("lib/i18n.ts")).toBe("medium");
    expect(tierForPath("styles/globals.css")).toBe("medium");
    expect(tierForPath("scripts/check-docs-parity.mjs")).toBe("medium");
    expect(tierForPath("public/favicon.ico")).toBe("medium");
  });

  it("treats CI, deploy config, manifests, and review policy as high", () => {
    expect(tierForPath(".github/workflows/ci.yml")).toBe("high");
    expect(tierForPath(".github/CODEOWNERS")).toBe("high");
    expect(tierForPath(".cursor/BUGBOT.md")).toBe("high");
    expect(tierForPath("package.json")).toBe("high");
    expect(tierForPath("pnpm-lock.yaml")).toBe("high");
    expect(tierForPath("wrangler.toml")).toBe("high");
    expect(tierForPath("next.config.mjs")).toBe("high");
    expect(tierForPath("AGENTS.md")).toBe("high");
    expect(tierForPath("docs/REVIEW-POLICY.md")).toBe("high");
  });

  it("uses the highest tier when a diff mixes paths", () => {
    expect(
      classifyFiles([
        "content/docs/cli.mdx",
        "components/marketing/shell.tsx",
        ".github/workflows/ci.yml",
      ]).tier,
    ).toBe("high");
  });

  it("defaults an unknown path to medium and an empty diff to low", () => {
    expect(tierForPath("notes/scratch.txt")).toBe("medium");
    expect(classifyFiles([]).tier).toBe("low");
    expect(formatReport([])).toContain("Risk tier: low");
  });
});

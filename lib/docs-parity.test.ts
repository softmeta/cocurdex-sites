import { describe, expect, it } from "vitest";
import { checkDocsParity, pagesAligned } from "../scripts/docs-parity.mjs";

describe("docs parity", () => {
  it("mirrors every English docs page with a zh-CN page", () => {
    const result = checkDocsParity();
    expect(result.ok, result.errors.join("\n")).toBe(true);
  });

  it("allows translated sidebar separators and rejects drifted page paths", () => {
    expect(
      pagesAligned(
        ["index", "---Product---", "cli"],
        ["index", "---产品---", "cli"],
      ),
    ).toBeNull();
    expect(pagesAligned(["index", "cli"], ["cli", "index"])).toMatch(/不一致/);
    expect(pagesAligned(["index"], ["index", "cli"])).toMatch(/长度/);
    expect(pagesAligned(["---Product---"], ["cli"])).toMatch(/分隔符/);
  });
});

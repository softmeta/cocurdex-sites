import { defineI18n } from "fumadocs-core/i18n";

/** UI-level i18n: English stays unprefixed, zh-CN under /zh-cn/. Routing is
 * handled by separate route trees, not middleware — `hideLocale` here only
 * steers the language switcher's URL math. */
export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: ["en", "zh-cn"],
  hideLocale: "default-locale",
});

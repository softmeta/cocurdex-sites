import { defaultLocale, type SiteLocale } from "../locales";
import { dict as en } from "./en";
import { dict as zhCn } from "./zh-cn";

const dicts: Record<SiteLocale, typeof en> = {
  en,
  "zh-cn": zhCn,
};

export function getMarketingDict(locale: SiteLocale) {
  return dicts[locale] ?? dicts[defaultLocale];
}

export type { MarketingDict } from "./en";

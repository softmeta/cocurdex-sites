import { zhCN } from "@fumadocs/language/zh-cn";
import { uiTranslations } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "./i18n";
import { localizedPath, type SiteLocale } from "./locales";
import { getMarketingDict } from "./marketing";
import { site } from "./site";

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .preset("zh-cn", zhCN())
  .add({
    en: { displayName: "English" },
  });

export function baseOptions(locale: SiteLocale): BaseLayoutProps {
  const dict = getMarketingDict(locale);
  return {
    nav: {
      title: (
        <>
          {/* biome-ignore lint/performance/noImgElement: static export, small svg logo */}
          <img src="/cocurdex-mark.svg" alt="" width={22} height={19} />
          {site.name}
        </>
      ),
      url: localizedPath(locale, "/"),
    },
    links: [
      {
        text: dict.nav.download,
        url: localizedPath(locale, "/download/"),
      },
    ],
    githubUrl: site.github,
  };
}

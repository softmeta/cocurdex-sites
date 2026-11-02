import type { Metadata } from "next";
import { PrivacyPage } from "@/components/marketing/privacy-page";
import { getMarketingDict } from "@/lib/marketing";

const dict = getMarketingDict("zh-cn");

export const metadata: Metadata = {
  title: dict.privacy.pageTitle,
  description: dict.privacy.metaDescription,
  alternates: {
    canonical: "/zh-cn/privacy/",
    languages: { en: "/privacy/", "zh-CN": "/zh-cn/privacy/" },
  },
};

export default function Page() {
  return <PrivacyPage locale="zh-cn" />;
}

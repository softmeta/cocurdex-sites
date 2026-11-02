import type { Metadata } from "next";
import { SupportPage } from "@/components/marketing/support-page";
import { getMarketingDict } from "@/lib/marketing";

const dict = getMarketingDict("zh-cn");

export const metadata: Metadata = {
  title: dict.support.pageTitle,
  description: dict.support.metaDescription,
  alternates: {
    canonical: "/zh-cn/support/",
    languages: { en: "/support/", "zh-CN": "/zh-cn/support/" },
  },
};

export default function Page() {
  return <SupportPage locale="zh-cn" />;
}

import type { Metadata } from "next";
import { DownloadPage } from "@/components/marketing/download-page";
import { getMarketingDict } from "@/lib/marketing";

const dict = getMarketingDict("zh-cn");

export const metadata: Metadata = {
  title: dict.download.pageTitle,
  description: dict.download.metaDescription,
  alternates: {
    canonical: "/zh-cn/download/",
    languages: { en: "/download/", "zh-CN": "/zh-cn/download/" },
  },
};

export default function Page() {
  return <DownloadPage locale="zh-cn" />;
}

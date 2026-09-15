import type { Metadata } from "next";
import { DownloadPage } from "@/components/marketing/download-page";
import { getMarketingDict } from "@/lib/marketing";

const dict = getMarketingDict("en");

export const metadata: Metadata = {
  title: dict.download.pageTitle,
  description: dict.download.metaDescription,
  alternates: {
    canonical: "/download/",
    languages: { en: "/download/", "zh-CN": "/zh-cn/download/" },
  },
};

export default function Page() {
  return <DownloadPage locale="en" />;
}

import type { Metadata } from "next";
import { HomePage } from "@/components/marketing/home-page";
import { getMarketingDict } from "@/lib/marketing";
import { site } from "@/lib/site";

const dict = getMarketingDict("en");

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: dict.meta.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh-cn/" },
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}

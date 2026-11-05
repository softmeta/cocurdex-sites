import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/marketing/legal-document-page";
import { getMarketingDict } from "@/lib/marketing";

const dict = getMarketingDict("en");

export const metadata: Metadata = {
  title: dict.terms.pageTitle,
  description: dict.terms.metaDescription,
  alternates: {
    canonical: "/terms/",
    languages: { en: "/terms/", "zh-CN": "/zh-cn/terms/" },
  },
};

export default function Page() {
  return <LegalDocumentPage locale="en" document="terms" />;
}

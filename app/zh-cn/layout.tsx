import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { translations } from "@/lib/layout.shared";
import { site } from "@/lib/site";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProvider
          i18n={i18nProvider(translations, "zh-cn")}
          search={{ options: { type: "static", api: "/api/search-cn" } }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

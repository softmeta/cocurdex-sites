import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/lib/layout.shared";
import { sourceCn } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions("zh-cn")} tree={sourceCn.getPageTree()}>
      {children}
    </DocsLayout>
  );
}

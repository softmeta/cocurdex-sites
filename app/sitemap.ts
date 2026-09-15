import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { source, sourceCn } from "@/lib/source";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/download/", "/zh-cn/", "/zh-cn/download/"];
  for (const page of source.getPages()) paths.push(`${page.url}/`);
  for (const page of sourceCn.getPages()) paths.push(`${page.url}/`);
  return paths.map((path) => ({ url: new URL(path, site.url).href }));
}

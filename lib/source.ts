import { loader } from "fumadocs-core/source";
import { defineDocs } from "fumadocs-mdx/macro";

const docsEn = defineDocs({ dir: "content/docs" });
const docsCn = defineDocs({ dir: "content/docs-cn" });

export const source = loader({
  baseUrl: "/docs",
  source: docsEn.toFumadocsSource(),
});

export const sourceCn = loader({
  baseUrl: "/zh-cn/docs",
  source: docsCn.toFumadocsSource(),
});

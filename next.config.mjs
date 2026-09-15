import path from "node:path";
import { fileURLToPath } from "node:url";
import { createMDX } from "fumadocs-mdx/next";

const appDir = path.dirname(fileURLToPath(import.meta.url));

// Marketing + docs. Static export keeps the Cloudflare Pages deploy simple.
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  // Preserve the current /docs/.../ trailing-slash URLs on Pages.
  trailingSlash: true,
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(appDir, "../.."),
};

const withMDX = createMDX();

export default withMDX(config);

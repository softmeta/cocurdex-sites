import { createFromSource } from "fumadocs-core/search/server";
import { sourceCn } from "@/lib/source";

export const dynamic = "force-static";

export const { staticGET: GET } = createFromSource(sourceCn);

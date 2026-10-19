import { checkDocsParity } from "./docs-parity.mjs";

const result = checkDocsParity();
if (!result.ok) {
  for (const error of result.errors) console.error(error);
  process.exit(1);
}

console.log(result.summary);

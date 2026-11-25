import { writeFileSync, chmodSync } from "node:fs";
// pick v1: fridge display vs thermometer
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const target = join(dir, "entry.txt");
const text = "My smart fridge's display reads 3°C. My thermometer reads 11°C. The display just suggested a recipe for warm milk.";

writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);

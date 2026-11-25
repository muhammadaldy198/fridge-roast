import { chmodSync, writeFileSync } from "node:fs";
// a fridge that trusts its own broken thermometer and prescribes warm milk anyway
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outFile = join(here, "entry.txt");
const joke =
  "My smart fridge's display reads 3°C. My thermometer reads 11°C. The display just suggested a recipe for warm milk.";

writeFileSync(outFile, joke, "utf8");
chmodSync(outFile, 0o644);

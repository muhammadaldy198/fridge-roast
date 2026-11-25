import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const text = "My smart fridge's display reads 3°C. My thermometer reads 11°C. The display just suggested a recipe for warm milk.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);

// pick: display lies 3C vs thermometer 11C, recipe for warm milk

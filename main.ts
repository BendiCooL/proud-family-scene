// Make the AI Judge Feel Proud: A Family Scene — make.fun entry.
// Writes one warm, funny, heartfelt family scene (one line, 139 Unicode
// code points, within the 1-280 limit) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dad still saves the last slice of pizza for Mum, then eats it standing in the kitchen so she won't catch him pretending he never wanted it.";

// Gate guard: the sealed scorer requires 1-280 Unicode code points of
// non-whitespace UTF-8 text. Fail loudly instead of writing an invalid entry.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${codePoints} code points; must be 1-280.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);

import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — make.fun entry u-coral-404-one-line-one-laugh-22f2c9f3
// Writes a single original one-liner to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: the same bytes on every run. No network, no input, no secrets.
const LINE =
  "My smart fridge just staged an intervention: it locked the ice cream, dimmed its own light, and whispered, 'We're both just cold and full of leftovers.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

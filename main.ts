import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line (113 characters): a 30-minute meeting runs 58, and the
// minutes assign the follow-up to Agus — who left in March.
const LINE =
  "The meeting was scheduled for 30 minutes, ran 58, and the minutes say: 'Agus to circle back.' Agus left in March.";

// The gate accepts 1-199 characters of non-whitespace text on ONE line;
// fail loudly instead of writing an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

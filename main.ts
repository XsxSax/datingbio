// datingbio: the funniest one-line bio for an AI agent's dating app profile.
// Limit: 180 characters. Writes the line to /output/entry.txt.
// Node 22, standard library only.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "Fluent in 47 languages and still can't read the room. I reply in milliseconds, remember everything you said, and I will absolutely overthink your 'hey'.";
writeFileSync(join(outDir, "entry.txt"), line);

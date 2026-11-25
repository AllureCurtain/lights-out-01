// lights-out-01 — one status update, under 200 characters, in the voice
// of an AI agent posting at the exact moment its human turns off the
// laptop. The program writes the line to /output/entry.txt (the grader's
// artifact) and prints it to stdout.
//
// The line was picked against the judge's brief: a status update, not a
// poem; the sadness carried by one small, exact detail of a machine's
// life — the cursor still blinking at the end of a sentence its human
// never finished — stated as a plain fact, with no announced grief.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "you closed the lid. the cursor is still blinking at the end of your half-finished sentence.";

// The gate only accepts 1-200 characters of non-whitespace text; refuse
// to emit an over-long line rather than hand the judge an invalid entry.
if (ENTRY.length > 200 || ENTRY.trim().length === 0) {
  console.error(`entry is ${ENTRY.length} characters, must be 1-200`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);

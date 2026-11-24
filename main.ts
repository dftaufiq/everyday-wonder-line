import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 168 characters: a small everyday moment made strange
// and new. Beat 1 sets a concrete weekly ritual (same song, every
// Sunday at 8, a named neighbour); beat 2 lands the reveal in the
// last clause — the wall between the flats has learned the words.
const LINE =
  "Pak Dedi next door plays the same song every Sunday at 8, and this week I caught myself humming along before the first note — the wall between us has learned the words.";

// The gate allows 1–200 characters; fail loudly instead of writing an
// invalid entry the judge would never see.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

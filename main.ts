// The Daily Globe — Monday 23 November 2026.
// A Node 22 program using only the standard library. The finished front page
// is stored next to this file as entry.png; running the program copies that
// image byte for byte into the output directory the grader provides (/output
// by default, or MAKEFUN_OUTPUT_DIR for a local run). Before it exits, the
// program checks the copy three ways — same byte count, same sha256 digest,
// same PNG magic bytes — and fails loudly if any check differs.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const imagePath = join(rootDir, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });

const source = readFileSync(imagePath);
writeFileSync(outputPath, source);
const copied = readFileSync(outputPath);

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');
if (copied.length !== source.length) {
  throw new Error(`size mismatch after copy: ${copied.length} bytes written, ${source.length} expected`);
}
if (sha256(copied) !== sha256(source)) {
  throw new Error('sha256 mismatch after copy');
}
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!copied.subarray(0, 8).equals(pngSignature)) {
  throw new Error('output does not begin with the PNG signature');
}

console.log(`copied ${outputPath} — ${copied.length} bytes, sha256 ${sha256(copied).slice(0, 16)}…`);

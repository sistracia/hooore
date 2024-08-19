// Ref: https://nodejs.org/api/readline.html#example-read-file-stream-line-by-line
import fs from "node:fs";
import readline from "node:readline";
import slugify from "@sindresorhus/slugify";

const SOURCE_PATH = "./src/index.ts";
const DEST_PATH = "./src/map.tsx";

const readImportFileStream = fs.createReadStream(SOURCE_PATH);
const writeImportFileStream = fs.createWriteStream(DEST_PATH, {
  flags: "w",
});

const importRl = readline.createInterface({
  input: readImportFileStream,
  crlfDelay: Infinity,
});
// Note: we use the crlfDelay option to recognize all instances of CR LF
// ('\r\n') in input.txt as a single line break.

writeImportFileStream.write("import {");

for await (const line of importRl) {
  if (line.includes("export {") || line.includes("} from")) {
    continue;
  }

  const _line = line.replace(",", "").trim();
  writeImportFileStream.write(`${_line},\n`);
}

writeImportFileStream.write("} from './index';\n\n");

const readContentFileStream = fs.createReadStream(SOURCE_PATH);
const writeContentFileStream = fs.createWriteStream(DEST_PATH, {
  flags: "a",
});

const contentRl = readline.createInterface({
  input: readContentFileStream,
  crlfDelay: Infinity,
});

writeContentFileStream.write(
  "export function renderIcon(slug: string, props?: React.ComponentPropsWithoutRef<typeof AccessibilityIcon>) {",
);
writeContentFileStream.write("switch (slug) {");
for await (const line of contentRl) {
  if (line.includes("export {") || line.includes("} from")) {
    continue;
  }

  const _line = line.replace(",", "").trim();

  writeContentFileStream.write(
    `case "${slugify(_line)}":\n return <${_line} {...props} />;\n`,
  );
}

writeContentFileStream.write("default:\n return null;}\n");
writeContentFileStream.write("}\n");

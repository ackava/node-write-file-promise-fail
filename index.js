import fsp from "node:fs/promises";
import { createReadStream } from "node:fs";

const inFile = `di-${Date.now()}`;
const outFile = `d-${Date.now()}`;
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

try {
    const s1 = createReadStream(inFile);
    await sleep(1);
    await fsp.writeFile(outFile, s1);
} catch (error) {
    console.log(`Sorry file copy failed`);
}

console.log(`App did not crash`);
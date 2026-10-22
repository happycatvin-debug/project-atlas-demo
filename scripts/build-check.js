import { access } from "node:fs/promises";

await Promise.all([access("index.html"), access("styles.css")]);
console.log("Static build ready");

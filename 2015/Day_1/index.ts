import { readFileSync } from "fs";

const problemData = readFileSync(__dirname + "/input.txt", "utf8");

let level: number = 0;

for (let [index, char] of [...problemData].entries()) {
  char === "(" && (level += 1);
  char === ")" && (level -= 1);
  if (level === -1) {
    console.log(index);
  }
}

console.log(level);

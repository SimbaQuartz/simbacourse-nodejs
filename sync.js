const { readFileSync, writeFileSync } = require("fs");

const arti_file = readFileSync("./content/sync/arti.txt", "utf8");
const maulik_file = readFileSync("./content/sync/maulik.txt", "utf8");

console.log(arti_file);
console.log(maulik_file);

const writeFile = writeFileSync(
  "./content/students.txt",
  `These are the students : ${arti_file} and ${maulik_file}`,
  { flag: "a" }
);

// console.log(writeFile);

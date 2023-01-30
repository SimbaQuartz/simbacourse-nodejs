// Globals in NodeJS
// __dirname - The directory name of the current execution context
// __filename - The file name of the current execution context
// require -
// module -
// process

// const myAsWeGoThing = require("./asWeGo.js"); // as we go export
// const secretKeeper = require("./secretKeeper.js"); // simply my export
// const myFile = require("./myFile.js"); //function

// console.log("================================");
// console.log(myAsWeGoThing);
// console.log("================================");
// console.log(secretKeeper);
// console.log("================================");
// console.log(myFile);

// import itsMagical from "./magic";

/**
 * Modules - Inbuilt modules in NodeJS
 *
 * os
 * fs
 * http
 * path
 * net
 */

// const os = require("os");

// console.log(os.userInfo());
// console.log(os.release());
// console.log(os.machine());
// console.log(os.uptime());

const path = require("path");

// console.log(path);
// console.log(path.sep);

const absolutePathTOFile = path.join(
  __dirname,
  "/content",
  "/subContent",
  "texto.txt"
);

console.log(absolutePathTOFile);

const resolvedPath = path.resolve("/content", "/subContent", "texaso.txt");
console.log(resolvedPath);

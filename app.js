/**
 * npm -i <package_name>
 *
 * npm install -g <package_name>
 * sudo npm install -g <package_name> // for mac
 *
 * package.json -
 * manual configure - create a new file by name package.json and configure each and every property of the app one by one.
 * npm init //Will ask step-by-step for each property
 * npm init -y // Will define the package json and configure automatically
 *
 * for dev environment
 * npm i nodemon --save-dev
 * npm i nodemon -D
 */

//Promises and Async patterns

const { readFile, writeFile } = require("fs").promises;

// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const firstFile = readFile(
//   "./content/japsimaran.txt",
//   "utf8",
//   (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.error(result);
//     return result;
//   }
// );

// const secondFile = readFile("./content/sahil.txt", "utf8", (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.error(result);
//   return result;
// });

// const contentReader = (filePath) => {
//   return new Promise((resolve, reject) => {
//     readFile(filePath, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// };

// const contentWriter = (filePath, content) => {
//   return new Promise((resolve, reject) => {
//     writeFile(filePath, content, { flag: "a" }, (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// };

// contentReader("./content/japsimaran.txt")
//   .then((result) => {
//     console.log(result);

//     contentReader("./content/sahil.txt")
//       .then((result1) => {
//         console.log(result1);
//         //write file content

//         contentWriter(
//           "./final.txt",
//           `THis is my content ${result} , ${result1}`
//         )
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {
//             console.log("THis is the console for write, " + err);
//           });
//       })
//       .catch((err) => {
//         console.error(`Here is inner catch ${err}`);
//       });
//   })
//   .catch((err) => {
//     console.error(`Here is outer catch ${err}`);
//   });

const readerWriter = async () => {
  try {
    //method 1
    // const read1 = await contentReader("./content/japsimaran.txt");
    // const read2 = await contentReader("./content/sahil.txt");
    // const writeUp = await contentWriter(
    //   "./content/final2.txt",
    //   `This is my content for the final evaluation : ${read1} , ${read2}`
    // );

    //method 2
    // const read1 = await readFilePromise("./content/japsimaran.txt", "utf8");
    // const read2 = await readFilePromise("./content/sahil.txt", "utf8");
    // const writeUp = await writeFilePromise(
    //   "./content/final2.txt",
    //   `This is my content for the final evaluation : ${read1} , ${read2}`,
    //   { flag: "a" }
    // );

    //method 3
    const read1 = await readFile("./content/japsimaran.txt", "utf8");
    const read2 = await readFile("./content/sahil.txt", "utf8");
    const writeUp = await writeFile(
      "./content/final2.txt",
      `This is my content for the final evaluation : ${read1} , ${read2}`,
      { flag: "a" }
    );
  } catch (err) {
    console.log(`THis is error : ${err}`);
  }
};
readerWriter();

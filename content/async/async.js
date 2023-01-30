const { readFile, writeFile } = require("fs");

console.log("Start reading files ..."); //1
readFile("./content/japsimaran.txt", "utf8", (err, result) => {
  console.log("Reading files check 1..."); //3
  if (err) {
    console.error(err);
    return;
  } else {
    var firstResult = result;
    readFile("./sahil.txt", "utf8", (err, result) => {
      console.log("Reading files check 1.1..."); //4
      if (err) {
        console.error(err);
        return;
      } else {
        var secondResult = result;
        writeFile(
          "./newFile.txt",
          `THis is my content ${firstResult} , ${secondResult}`,
          (err, result) => {
            if (err) {
              console.error(err);
              return;
            } else {
              console.log("File write success!!");
            }
          }
        );
      }

      console.log("Reading files check 2.1..."); // 6
    });
  }
  console.log("Reading files check 2...", result); // 5
});

console.log("End reading files ..."); //2

// 5-> 10/21 -> 16 -> 18 ->
// 5-> 10 ->21 -> 12 -> 16 -> 18

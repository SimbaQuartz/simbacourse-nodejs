const { readFileSync, writeFileSync } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  //   req.on("data", (data) => {
  //     console.log(data);
  //   });

  //   res.end(`<div> <h1>Welcome</h1>
  //   <h2>This is my node JS class.</h2></div>`);

  //   res.end();
  return;
});

server.on("request", (req, res) => {
  const myFile = readFileSync("./content/Sahil.txt", "utf8");

  res.write("THis ");
  res.end(`<div> <h1>Welcome</h1>
 <h2>This is my node JS class.</h2></div>`);
});

server.listen(5002);

//Streams
// - Readable
// - Writable
// - Duplex
// - Transform

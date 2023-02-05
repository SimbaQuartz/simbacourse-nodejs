const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is my home page.");
    return;
  }
  if (req.url === "/about") {
    // for (let i = 0; i >= 50; i++) {

    // for(initialization; condition -> Boolean; expression , executables)

    for (
      let i = 12, y = 10, z = 20, x = 23;
      i <= 50 && z > 10;
      z--, i++, y++, x--
    ) {
      for (; j >= 50; ) {
        console.log(i, j);
      }
    }

    // while (i == 1);
    res.end("This is my about page.");
    return;
  }
  res.end(`<div> <h1>404</h1>
  <h2>Oops!! No page found!!</h2></div>`);
  return;
});
server.listen(5002);

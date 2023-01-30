const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is my home page.");
    return;
  }
  if (req.url === "/about") {
    res.end("This is my about page.");
    return;
  }
  res.end(`<div> <h1>404</h1>
  <h2>Oops!! No page found!!</h2></div>`);
  return;
});

server.listen(5002);

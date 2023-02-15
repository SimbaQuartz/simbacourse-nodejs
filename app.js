const http = require("http");

const { readFileSync } = require("fs");

const homePage = readFileSync("./pages/home/index.html");
const homePageStyles = readFileSync("./pages/home/index.css");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(homePage);
    return;
  }
  if (req.url == "/about") {
    res.end("About Page");
    return;
  }
  if (req.url == "/index.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(homePageStyles);
    return;
  }
  res.writeHead(404, { "content-type": "text/html" });
  res.end("404");
  return;
});

server.listen(5000);

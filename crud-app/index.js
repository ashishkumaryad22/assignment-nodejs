const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/index.html", "UTF-8", (err, html) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    });
  }
  if (req.url === "/contact") {
    fs.readFile("./public/contact.html", "UTF-8", (err, html) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    });
  }
  if (req.url === "/about") {
    fs.readFile("./public/about.html", "UTF-8", (err, html) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    });
  }
});

server.listen(port, hostname, () => {
  console.log("Server is running on port 8080");
});

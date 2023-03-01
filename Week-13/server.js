const http = require("http");
const url = require("url");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const controller = require("./Controller/controller");

const routes = (req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === "/filter") {
    controller.filter(req, res);
  } else if (pathname === "/current") {
    controller.getCurrent(req, res);
  } else if (pathname === "/forecast") {
    controller.getForecast(req, res);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }
};

const server = http.createServer((req, res) => {
  routes(req, res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

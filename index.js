const http = require("http");
const PORT = 8080;

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Hello, world!");
});

server.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});

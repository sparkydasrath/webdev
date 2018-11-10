const http = require("http"); // node does not support ES6 modules yet
const fs = require("fs");


fs.readFile("index.html", (err, html) => {

    if (err) throw err;
    const hostname = "127.0.0.1";
    const port = 3000;

    const server = http.createServer((req, resp) => {
        resp.statusCode = 200;
        resp.setHeader("Content-type", "text/html");
        resp.write(html);
        resp.end();
    });

    server.listen(port, hostname, () => {
        console.log(`Server started on ${hostname}:${port}`);
    });

});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var port = 8080;
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hello!');
});
server.listen(port);
console.log('Node.js server listening on port', port);

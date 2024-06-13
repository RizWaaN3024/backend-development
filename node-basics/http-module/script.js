const http = require('http');

const server = http.createServer(function (Req, res) {
    res.end("Hello World")
})

server.listen(3000);
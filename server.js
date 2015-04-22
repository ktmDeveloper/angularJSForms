var node_static = require('node-static'),
    host = "localhost",
    port = 8006,
    http = require("http");

http.createServer(handleHTTP).listen(port, host);

var fileServer = new node_static.Server(__dirname);

function handleHTTP(request, response) {
    request.addListener('end', function() {
        fileServer.serve(request, response);
    }).resume();
}
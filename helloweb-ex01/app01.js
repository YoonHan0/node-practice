var http = require('http');

var port = 9090;
var server = http.createServer(function(req, resp) { // 요청이 들어오면 실행되는 function
    resp.writeHead(200, {
        'Content-Type' : "text/html"
    });
    resp.end('<h1>Hello World!</h1>')
});

server.listen(port, function() {
    console.log("http server running on " + port);
});
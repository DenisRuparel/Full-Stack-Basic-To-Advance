var http = require('http')
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("Line 1 </br>")
    res.write("Line 2 </br>")
    res.end("Bye")
    
}).listen(3000);
console.log("server is started on http://127.0.0.1:3000")
var fs = require('fs');
var http = require('http');
http.createServer((req, res) => {

    fs.readFile('demo.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        res.end()
    })
    
}).listen(3000);
console.log("server is started on http://127.0.0.1:3000")

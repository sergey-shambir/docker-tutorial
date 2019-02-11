const http = require("http");
const url = require("url");

function index(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello!');
    res.end();
    console.log('accepted request to "/"');
}

http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname == '/')
    {
        index(req, res);
    }
    else
    {
        res.writeHead(200);
        res.end();
    }
}).listen(3000, () => {
    console.log('listening port 3000');
});

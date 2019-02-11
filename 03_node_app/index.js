const redis = require("redis");
const http = require("http");
const url = require("url");

const client = redis.createClient();

function index(req, res) {
    const pathname = url.parse(req.url).pathname;
    if (pathname == '/')
    {
        client.incr('site_counter', (err, count) => {
            if (err)
            {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('error: ' + err);
                res.end();
            }
            else
            {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('site visits count: ' + count);
                res.end();
            }
        });
    }

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
}).listen(3000);

const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Service C! Version: v1\n');
});

server.listen(port, () => {
    console.log(`Service C running on port ${port}`);
});

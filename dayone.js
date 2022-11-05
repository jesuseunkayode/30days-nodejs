const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    console.log('server is working')

})

server.listen(port, host, (err) => {
    console.log('server is success')
})
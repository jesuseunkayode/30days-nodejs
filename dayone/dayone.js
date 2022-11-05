const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
     response.write("i serve plain text on the server successfully")
    response.end()
})

server.listen(port, host, (err) => {
    if(err) {
        console.log('Error has occurred', err)
    } else {
        console.log(`server is running on port ${port} hostname ${host}`)
    }
    
})


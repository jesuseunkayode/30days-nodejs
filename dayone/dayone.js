const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const fs = require('fs')

// //the server serves string
// const server = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//      response.write("I serve plain text on the server successfully")
//     response.end()
// })

// //The server serves html file
//   const server = http.createServer((request, response) => {
//      response.writeHead(200, {'Content-type' : 'text/html'})
//      fs.readFile('index.html', (error, data) => {
//          if(error) throw error
//          response.end(data)
//      })
//   })

// the server serves a json file
//   const server = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     let jayson = {
//           status : 200,
//           message: 'success',
//           result: ['monday', 'tuesday', 'wednesday'],
//           phone: 080
//     }
//       response.end(JSON.stringify(jayson))
//   })

  //the server serves a pdf file


server.listen(port, host, (err) => {
    if(err) {
        console.log('Error has occurred', err)
    } else {
        console.log(`server is running on port ${port} hostname ${host}`)
    }
    
})


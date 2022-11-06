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
//   const server = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/pdf'})
//        fs.readFile('index.pdf', (error, data) => {
//          if(error) {
//             response.json({'status':'error', msg:err})
//          } else {
//             response.write(data)
//             response.end()
//          }
//        })
//   })

   //the server serve audio file
//    const server = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'audio/mp3'})
//     fs.exists('audio.mp3', (exists)=> {
//         if(exists) {
//             let rStream = fs.createReadStream('audio.mp3')
//             rStream.pipe(response)
//         } else {
//             response.end("It is 404 error")
//         }
//     })
//    })

//the server serves vido file
 const server = http.createServer((request, response) =>{
     response.writeHead(200, {'Content-Type' :'video/mp4'})
     fs.exists('video.mp4', (exists) => {
         if(exists) {
            let rStream = fs.createReadStream('video.mp4')
             rStream.pipe(response)
         } else {
            response.send('It is 404 error');
            response.end();
         }
     })
 })

server.listen(port, host, (err) => {
    if(err) {
        console.log('Error has occurred', err)
    } else {
        console.log(`server is running on port ${port} hostname ${host}`)
    }
    
})


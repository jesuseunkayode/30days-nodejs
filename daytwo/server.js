const fs = require('fs')

// //read file 
// fs.readFile('message.txt', (error, data) => {
//     if (error) throw error;
//     console.log('content: ' + data)
// })

// read file synchronously
// const fileName = fs.readFileSync('message.txt', 'utf8')
// console.log(fileName)

//write to a file in nodejs

// const content = 'This is kayode jesuseun';
// fs.writeFile('message.txt', content, (error) => {
//     if(error) throw error;
//     console.log('it is saved')
// })

// const content = 'This message has been written synchronously in Nodejs';
// fs.writeFileSync('message.txt', content, (error) => {
//     if(error) throw error;
//     console.log('it is saved')
// })

// const newContent = "I am learning how to append file in nodejs";
//  fs.appendFile('message.txt', newContent, (error) => {
//     if(error) throw error;
//     console.log('New content added successfully')
//  })

// const newContent = "/n I am learning how to append file in nodejs";
//  fs.appendFileSync('message.txt', newContent, (error) => {
//     if(error) throw error;
//     console.log('New content added successfully')
//  })

 //rename file successfully asynchronously
//  fs.rename('message.txt', 'index.html', (error) => {
//     if(error) throw error;
//     console.log('file renamed successfully')
//  })

//rename file successfully synchronously
// fs.renameSync('index.html', 'contact.html');
// console.log('file renamed successfully')

//delete file asynchronously
// fs.unlink('contact.html', (error) => {
//     if(error) throw error;
// });
// console.log('file deleted successfully')

fs.unlinkSync('help.html', (error) => {
    if(error) throw error;
});
console.log('file deleted successfully')
const fs = require('fs')
//properties of error in nodejs
// const err = new Error('show error message');
// console.error(err.message)

// 4 types of errors
// 1) Standard Javascript errors
// 2) System errors
// 3) User specified error
// 4) Assertion errors

fs.readFile('message.txt', 'utf8', (err, data) => {
    if(err)
    return console.error(err);
   console.log("The data is ", data)
})
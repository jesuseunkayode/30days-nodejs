// Find specific word using regular expression 
//const fs = require('fs');
// let fileName =  'index.html';
// let str = fs.readFileSync(fileName).toString();
// let pattern = /them open/gim;
// const myarray = str.match(pattern);
// let len = myarray.length;
// console.log(myarray)

//find number of tags using regular expression:
// const fs = require('fs');
// let fileName = 'index.html';
// let str = fs.readFileSync(fileName).toString();
// let pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
// let myarray = str.match(pattern);
// let len = myarray.length;
// console.log(myarray)

//validate email address using regular expression:

//  let email = "kaygmail.com"
//  let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//  let str = email.match(pattern)
//  if(str){
//     console.log('Valid email address')

//  } else {
//     console.log('please enter a valid email address');
//  }

 //validate hexdecimal using regular expression:

//  let str = 'FFFFFF';
//  let pattern = /^[a-fA-F0-9]+$/g;
//  let result = str.match(pattern);
//  if(result){
//     console.log('Valid hexadecimal number')
//  } else {
//     console.log('Not a hexadecimal number')
//  }

 //validate password using regular expression:
 let str = 'password';
 let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{12,20}$/;
 let result = str.match(pattern);
 if(result){
    console.log('Valid password pattern')
 } else {
    console.log('It doesnot match our password pattern')
 }
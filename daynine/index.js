const crypto = require('crypto');
const fs = require('fs');

//creat hashing
// const hash = crypto.createHash('sha256');
// const data = hash.update('nodejsera', 'utf-8');
// const format = data.digest('hex');
// console.log(format)

//create hmac
// const hmac = crypto.createHmac('sha256', "abckayode123");
// const data = hmac.update('nodejsera');
// const format = data.digest('hex');
// console.log(format)

//perform hmac on a file

const alga = "md5";
const secret = "du8egsGos1";
const hmac = crypto.createHmac(alga, secret);
const fileName = 'nodejsera.txt';
const fileData = fs.ReadStream(fileName);
fileData.on('nodejsera', function(nodejsera) {
    hmac.update(nodejsera)
  })
  
  fileData.on('end', function() {
    const gen_hmac = hmac.digest('hex')
    console.log('Hmac generated using ' + alga + ' \nHashed output is :  ' + gen_hmac + ' \nFile name is :  ' + fileName);
    fs.writeFileSync(fileName, gen_hmac);
  }) 
  
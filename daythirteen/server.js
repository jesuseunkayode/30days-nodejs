const express = require('express');
const app = express();
const crypto = require('crypto');
const path = require('path');
const { Db } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb://mongodb://localhost:27017/lands";
const client = new MongoClient((connectionString), {
    useNewurlParser: true,
    useUnifiedTopology: true
});

const PORT = process.env || 3000;

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
     response.set({
        'Access-Control-Allow-Origin' : '*'
     });
     return res.redirect('/public/index.html');
}).listen(3000);

const getHash = (pass, phone) => {
     let hmac = crypto.createHmac('sha512', phone);
    let data = hmac.update(pass);
    let genHmac = data.digest('hex');
    console.log(genHmac)
    return genHmac;
}

app.post('/signup', (request, response)=> {
      let name = request.body.name;
      let email = request.body.email;
      let pass = request.body.pass;
      let phone = request.body.phone
      let password = getHash(pass, phone);

      let data = {
        "name" : name,
        "email": email,
        "password": password,
        "phone": phone
      }

      client.connect((err, result) => {
        if(err) {
            throw err;
        }
        console.log("connected to database successfully");
        Db.collection(details).insertOne(data, (err, collection) =>{
            if(err){ throw err}
            console.log("Record inserted successfully");
			console.log(collection);
        })
      })
      console.log("DATA is " + JSON.stringify(data) );
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/success.html');  


})
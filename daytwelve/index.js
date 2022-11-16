const mongo = require('mongodb');
const connectionString = "mongodb://localhost:27017/laptop";

mongo.connect(connectionString, (err, db) => {
    if(err) {
        throw err;
    }
    console.log('database laptop is successfully created');
    db.close();
})


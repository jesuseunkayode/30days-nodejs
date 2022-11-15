const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (request, response)=> {
    response.send('Hello world from kayode jesuseun')
})


app.get('/signup', (request, response) => {
    response.send('Here is the sign up page of the website')
})

app.get('/signup', (request, response) => {
    let name = request.query.name;
    let email = request.query.email;
    let password = request.query.password

   console.log(name + " " + email + password)
    response.send('Here is the sign up page of the website')
})

app.get('/signin', (request, response) => {
    response.send('Here is the sign in page of the website')
})

app.get('/signup/dashboard', (request, response) => {
    response.send('Here is the dashboard page of a user has signed in successfully on the website')
})




app.listen(PORT, () => {
    console.log(`The server is up and running ${PORT}`)
})
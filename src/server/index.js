const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");
// const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,

    });

textapi.classify({
    'url': url
    }, function(error, response) {
    if (error === null) {
        console.log(response);
        // return response;
    }
    });

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



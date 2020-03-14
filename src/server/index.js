const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");

const app = express()

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());

app.use(express.static('dist'))
app.use(express.json()) // for parsing application/json

console.log(__dirname)

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
    });

app.post("/classify", (req, res) => {
    textapi.classify({'url': req.body.url}, (error, response) => {
        if (error == null) {
            console.log(response);
            res.send(response)
        } else {
            console.log(error)
        }
    });
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



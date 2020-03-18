// const dotenv = require('dotenv');
// dotenv.config();

var path = require('path')
const express = require('express')

const app = express()

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());

app.use(express.static('dist'))
app.use(express.json()) // for parsing application/json

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

module.exports = app


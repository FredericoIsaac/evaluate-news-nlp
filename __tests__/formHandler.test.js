// import { handleSubmit } from "../src/client/js/formHandler";

const app = require('../src/server/app')
const request = require('supertest')

describe("POST /classify", () => {
    test("it has a status of 200", async () => {
        //Sends POST request to /classify endpoint
        const response = await request(app)
        .post("http://localhost:8081/classify")
        .send({
            url: 'https://www.bbc.com/news/business-51906744'
        })
        expect(response.statusCode).toBe(200)
    });
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

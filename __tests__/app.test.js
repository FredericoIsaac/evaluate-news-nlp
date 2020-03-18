const app = require('../src/server/app')
const request = require('supertest')

describe('GET /', () => {
    test('it has a status of 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe("POST /classify", () => {
    test("it has a status of 200", async () => {
        //Sends POST request to /classify endpoint
        const response = await request(app)
        .post("/classify")
        .send({
            url: 'https://www.bbc.com/news/business-51906744'
        })
        expect(response.statusCode).toBe(200)
    });
    test("it returns a response", async () => {
        //Sends POST request to /classify endpoint
        const response = await request(app)
        .post("/classify")
        .send({
            url: 'https://www.bbc.com/news/business-51906744'
        })
        expect(response).toBeDefined
    });
})

describe("POST /sentiment", () => {
    test("it has a status of 200", async () => {
        //Sends POST request to /classify endpoint
        const response = await request(app)
        .post("/sentiment")
        .send({
            url: 'https://www.bbc.com/news/business-51906744'
        })
        expect(response.statusCode).toBe(200)
    });
    test("it returns a response", async () => {
        //Sends POST request to /classify endpoint
        const response = await request(app)
        .post("/sentiment")
        .send({
            url: 'https://www.bbc.com/news/business-51906744'
        })
        expect(response).toBeDefined
    });
})


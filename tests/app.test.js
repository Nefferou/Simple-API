const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK' });
});

describe('API tests', () => {
    it('GET / should return Hello world!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Hello world!' });
    });

    it('GET /status should return OK status', async () => {
        const res = await request(app).get('/status');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ status: 'OK' });
    });
});

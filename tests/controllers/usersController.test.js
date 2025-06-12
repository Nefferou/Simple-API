const request = require('supertest');
const express = require('express');
const usersRoutes = require('../../app/routes/usersRoutes');
const usersService = require('../../app/services/usersService');

const app = express();
app.use(express.json());
app.use('/users', usersRoutes);

beforeEach(() => {
    usersService.reset();
});

test('GET /users returns empty array', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
});

test('POST /users creates user', async () => {
    const res = await request(app)
        .post('/users')
        .send({ name: 'Alice', email: 'alice@example.com' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Alice');
});

test('GET /users/:id returns user', async () => {
    const user = usersService.createUser({ name: 'Bob', email: 'bob@example.com' });
    const res = await request(app).get(`/users/${user.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Bob');
});
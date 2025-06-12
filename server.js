const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running locally on port ${port}`);
});
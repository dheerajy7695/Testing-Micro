const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.port || 3000;

app.get('/users', async (req, res) => {
    const response = await axios.get('http://localhost:3001/users');
    res.json(response?.data);
});

app.get('/products', async (req, res) => {
    const response = await axios.get('http://localhost:3002/products');
    res.json(response?.data);
});

app.listen(port, () => {
    console.log('User server is running on port -', port);
});
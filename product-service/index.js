const express = require('express');
const app = express();

const port = 3002;

app.get('/products', (req, res) => {
    res.json([{ "name": "Laptop", "price": 50000 }, { "name": "Iphone", "price": 80000 }]);
});

app.listen(port, () => {
    console.log('User server is running on port -', port);
});
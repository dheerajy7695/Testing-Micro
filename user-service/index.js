const express = require('express');
const app = express();

const port = 3001;

app.get('/users', (req, res) => {
    res.json([{ "email": "Alice12@gmail.com", "age": 23 }, { "email": "Lucas34@gmail.com", "age": 33 }]);
});

app.listen(port, () => {
    console.log('User server is running on port -', port);
});
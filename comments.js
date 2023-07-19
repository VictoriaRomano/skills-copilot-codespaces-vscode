// Create web server

// 1. Import web server library
const express = require('express');

// 2. Create web server
const app = express();

// 3. Create route handler
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// 4. Start web server
app.listen(3000, () => {
    console.log('Express web server is running...');
});
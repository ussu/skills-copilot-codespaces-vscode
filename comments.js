// Create web server
// Create a new Express application
const express = require('express');
const app = express();

// Create a new route that listens for GET requests to the /comments path
// When a GET request is made to the /comments path, the server should respond with a JSON object, 
// containing a key count and a value of the number of comments
app.get('/comments', (req, res) => {
    res.json({count: 3});
});

// The server should listen on port 4001
app.listen(4001, () => {
    console.log('Your server is running on port 4001');
});
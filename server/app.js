const express = require('express');
const app = express();
const envVar = process.env.NODE_ENV

// Your code here

//To set ENV Variable => (in terminal) NODE_ENV=production node index.js
app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
require('dotenv').config();
const express = require('express');


const app = express();

const port = process.env.PORT || 3004;

app.get('/test', (req,res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

// set up cors, json, middleware*
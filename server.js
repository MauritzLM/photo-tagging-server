require('dotenv').config();
const express = require('express');
const db = require('./db');
const routes = require('./routes/index');


const app = express();

const port = process.env.PORT || 3004;

// routes
app.use('/', routes);


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

// set up cors, json, middleware*

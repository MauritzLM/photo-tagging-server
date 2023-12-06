require('dotenv').config();
const express = require('express');
const db = require('./db');
const routes = require('./routes/index');
const cors = require('cors');

const corsOptions = {
    origin: 'https://photo-tagging-app-nine.vercel.app',
    optionsSuccessStatus: 200
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use('/', routes);

module.exports = app;

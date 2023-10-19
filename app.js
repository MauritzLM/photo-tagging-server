require('dotenv').config();
const express = require('express');
const db = require('./db');
const routes = require('./routes/index');

const app = express();

app.use(express.json());

// routes
app.use('/', routes);

module.exports = app;

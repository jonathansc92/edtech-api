const express = require('express');
const cors = require('cors');

const app = express();

const students = require('./routes/students.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/api', students);

module.exports = app;
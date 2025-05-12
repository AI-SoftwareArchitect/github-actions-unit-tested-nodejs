const express = require('express');
const app = express();

app.get('/', (_, res) => res.send('Hello GitHub Actions!'));

module.exports = app;

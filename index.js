require('dotenv').config();
require('./lib/mongoClient')();
const express = require('express');
const app = express();

const config = require('./config')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(config.appName)
});


app.listen(config.port, () => {
  console.log(`${config.appName} listening on port ${config.port}!`);
});


module.exports = app;

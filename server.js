require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const validations = require('./middlewares/validate');
const routes = require('./routes');
const response = require ('./config/response');


app.all('/api/*', [validations]);

app.use(routes);

app.use(function (req, res, next) {
    response.fail(req, res, response.message.invalid_url);
    return;
});

app.listen(process.env.BID_APP_PORT, () => {
    console.log('App listening on port', process.env.BID_APP_PORT)
});

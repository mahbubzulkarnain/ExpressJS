if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('mongoose')
  .connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then((prop) => {
    console.log(`${process.env.DATABASE_URL} => ${prop.connection.name} connected, port ${prop.connection.port}.`)
  })
  .catch((err) => {
    console.error(err)
  });

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app
  .locals.webname = process.env.WEBNAME;

app
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')));

app
  .use('/', require('./routes/index'));

module
  .exports = app;

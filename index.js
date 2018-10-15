'use strict';

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

const GET_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '722e175eefa74e1f9a66e5a9f5d86a76';
app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.get('/api/newsflash', (req,res,next)=>{
  res.json('this is working');
});


app.get("/api/newsflash/everything", (request, response) => {
 
  // add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
  
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };

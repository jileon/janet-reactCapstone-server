'use strict';
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');

const { router: usersRouter } = require('./users');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');
const { PORT, CLIENT_ORIGIN, MONGODB_URI  } = require('./config');
const { dbConnect } = require('./db-mongoose');

// const {dbConnect} = require('./db-knex');
const categoryRouter = require('./Routes/categoryRouter');
const searchRouter = require('./Routes/searchRouter');
const foldersRouter =require('./Routes/foldersRouter');
const app = express();

mongoose.Promise = global.Promise;
app.use(express.json());
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

passport.use(localStrategy);
passport.use(jwtStrategy);



// Mount routers
app.use('/api/newsflash', categoryRouter);
app.use('/api/newsflash', searchRouter);
app.use('/api/newsflash/folders', foldersRouter);
app.use('/api/users/', usersRouter);
app.use('/api/auth/', authRouter);

const jwtAuth = passport.authenticate('jwt', { session: false });

app.get('/api/protected', jwtAuth, (req, res) => {
  return res.json({
    data: 'rosebud'
  });
});





//========Routes===================================
app.get('/api/newsflash', (req,res,next)=>{
  res.json('this is working');
});


app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Not Found' });
});


//Connect Mongoose

if (require.main === module) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error('\n === Did you remember to start `mongod`? === \n');
      console.error(err);
    });



  app.listen(PORT, function () {
    console.info(`Server listening on ${this.address().port}`);
  }).on('error', err => {
    console.error(err);
  });

}

// Listen for incoming connections
// if (process.env.NODE_ENV !== 'test') {
//   app.listen(PORT, function () {
//     console.info(`Server listening on ${this.address().port}`);
//   }).on('error', err => {
//     console.error(err);
//   });
// }



module.exports = app; // Export for testing
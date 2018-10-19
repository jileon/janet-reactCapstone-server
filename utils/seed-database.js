

const Folder = require('../folders/model');
const {User} = require('../users/models');
const { folders, users} = require('./seed-data');
const { MONGODB_URI } = require('../config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI , { useNewUrlParser:true })
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    return Promise.all([
      Folder.insertMany(folders),
      Folder.createIndexes(),
      User.insertMany(users),
      User.createIndexes(),
    ]);
   
  })
  .then(results => {
    // console.info(`Returned ${results.length} results`);
    // console.info(`Inserted ${results[0].length} notes`);
    console.log(results);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error(err);
  });

 
const express= require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Folder = require('../folders/model');
mongoose.Promise = global.Promise;

router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));

/* ========== GET/READ ALL FOLDERS ========== */
router.get('/', (req,res,next)=>{
  const user= req.user.username;
  const userId = req.user.id;

  Folder.find({userId}).sort({name:'asc'})
    .then((results)=>{
      res.json(results);
    })
    .catch(err => next(err));
});

module.exports= router;
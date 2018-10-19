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

/* ==========GET FOLDER BY ID ========== */
router.get('/:id', (req,res,next)=>{
  const getId = req.params.id;
  const user= req.user.username;
  const userId = req.user.id;

  Folder.findById(getId)
    .then((results)=>{
      res.json(results);
    })
    .catch(err => next(err));
});

/* ========== CREATE FOLDERS ========== */
router.post('/', (req,res,next)=>{
  const requiredField='foldername';
  const user= req.user.username;
  const userId = req.user.id;
  const {foldername}= req.body;



  const newFolder= {
    foldername,
    userId
  };

  if(!(requiredField in req.body)){
    const message = 'Missing foldername in request body';
    console.error(message);
    return res.status(400).send(message);
  }

  
  Folder.create(newFolder)
    .then((results)=>{
      console.log(req.originalUrl);
      res.location(`${req.originalUrl}/${newFolder.id}`).status(201).json(results);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('Folder name already exists');
        err.status = 400;
      }
      next(err);
    });

});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/:id', (req,res,next)=>{
  const updateId = req.params.id;
  const userId = req.user.id;
  const requiredField = 'article';
  
  if (!(requiredField in req.body)) {
    const message = `Missing \`${requiredField}\` in request body`;
    console.error(message);
    return res.status(400).send(message);
  }

  // console.log(req.body);
  // const newArticle = {...req.body.article, userId};
  const newArticle={
    title:req.body.article.title,
    image:req.body.article.image,
    description:req.body.article.description,
    url:req.body.article.url
  };

  //TODO: fix front end to 
  //TODO: FIX need to fix so new duplicate articles are pushed
  Folder.findByIdAndUpdate(updateId, {$push: {articles:newArticle}}, {new: true})
    .then((results)=>{
      console.log(results)
      res.json(results);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('Folder name already exists');
        err.status = 400;
      }
      next(err);
    });
   
});
//deletes folders from db
router.delete('/:id', (req,res,next)=>{
  const deleteId = req.params.id;
  const userId = req.user.id;

  return Folder.findOneAndRemove({_id: deleteId, userId})
    .then(()=>{
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ message: 'Internal server error' });
      console.log(err);
    });
});


module.exports= router;
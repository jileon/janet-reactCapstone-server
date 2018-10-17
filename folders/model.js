const mongoose = require('mongoose');


const folderSchema = mongoose.Schema({
  foldername: {type: String, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
});

folderSchema.index({ foldername: 1, userId: 1}, { unique: true });
folderSchema.set('timestamps', true);
folderSchema.methods.serialize = function(){
  return {
    foldername: this.foldername,
    id: this._id,
    userId: this.userId  
  };    
}

const folderModel = mongoose.model('Folder', folderSchema);

module.exports = folderModel;
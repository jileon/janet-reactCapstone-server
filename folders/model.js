import mongoose from 'mongoose';
import mongoose from 'mongoose'

const folderSchema = new mongoose.Schema({
    foldername: {
        type: String,
        required: true,
        unique: true
      }
});

folderSchema.methods.serialize = function(){
  
        return {
          foldername: this.foldername,
          id: this._id
       
        };
   
      
}

const Folder = mongoose.model('Folder', folderSchema);

module.exports = {Folder};
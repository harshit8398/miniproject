var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const mapSchema = new Schema({
    index:{
        type:Number,
        required:true
    },
    name:{
       type : String,
      required:true,
    },
    longitude:{
        type:Number,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    }
});

mongoose.model('maps',mapSchema);
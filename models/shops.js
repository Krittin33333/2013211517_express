const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    name:  {type:String, require:true, trim: true},
    photo: {type:String, default: 'nopic.png'},
    location:{
        lat: Number,
        lgn: Number,
    } ,
    //createdAt: {type: Date, default: Date.now},
    //updateAt: {type: Date, default: Date.now}   auto for moogoose
  },{ 
      collection: "shops",
      timestamps:true
});

const shops = mongoose.model("Shop",staffSchema)

module.exports = shops
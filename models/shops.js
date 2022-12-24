const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
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
      timestamps:true,
      toJSON: {virtuals:true}
});

schema.virtual('menus', {
    ref: 'Menu',  // Model
    localField: '_id', // author id
    foreignField: 'shop', // author in book
    });

const shops = mongoose.model("Shop",schema)

module.exports = shops
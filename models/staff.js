const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    name:  {type:String, require:true, trim: true},
    photo: {type:String, default: 'nopic.png'},
    created: {type: Date, default: Date.now}
  },{ 
    
    collection: "staffs"});

const staff = mongoose.model("staff",staffSchema)

module.exports = staff
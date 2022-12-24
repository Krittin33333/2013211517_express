const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    
    name: {type : String, required:true , tirm:true},
    price: {type: Number},
    shop : {
        type: Schema.Types.ObjectId, ref: 'Shop'
    }
  },{ 
      collection: "menus",
      timestamps:true
});

const menu = mongoose.model("Menu",schema)

module.exports = menu
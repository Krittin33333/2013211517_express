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
      timestamps:true,
      toJSON: {virtuals:true} //add schema.virtual
});

schema.virtual('price_vat').get(function(){
    return (this.price*0.07) + this.price
  })

const menu = mongoose.model("Menu",schema)

module.exports = menu
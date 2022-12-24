
  const shop = require('../models/shops');
  const menu = require('../models/menu');
const { schema } = require('../models/shops');


exports.index = async(req, res, next) => {
    // res.send('respond with a resource');
    const shops = await shop.find().select('name photo location').sort({_id:-1})

  const shopWithPhotoDomain = shops.map( (shop,index) => {
    return{
      id: shop._id,
      name: shop.name,
      photo: 'http://localhost:3000/images/'+ shop.photo,
      location:shop.location
    }
  })

    res.status(200).json({
      data: shopWithPhotoDomain
    })
  };

exports.menu = async(req, res, next) => {
    // res.send('respond with a resource');
    // const menus = await menu.find().select('+name -price')

    // const menus = await menu.find().where('price').gt(200)
    const menus = await menu.find().populate('menu')


    res.status(200).json({
      data: menus
    })
  };

  exports.selectid = async(req, res, next) => {
        
 
        const { id } = req.params
  
        // const shops = await shop.findOne({_id : id}).populate('menus')

        const shops = await shop.findById(id).populate('menus')
  
         res.status(200).json({
                data: shops
              })
        

        
    
        
      };




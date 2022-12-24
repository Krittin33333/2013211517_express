
  const shop = require('../models/shops');


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




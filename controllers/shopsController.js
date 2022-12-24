
  const shops = require('../models/shops');


exports.index = async(req, res, next) => {
    // res.send('respond with a resource');
    const shop = await shops.find()

    res.status(200).json({
      data: shop
    })
  };


  exports.bio = (req, res, next) => {
  
    res.status(200).json({
      fullname: 'Krittin kamkar',
      nickname: 'Aom',
      hobby:'Sleep',
      gitusername: 'Krittin33333'
    })

  };


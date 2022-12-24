
  const menu = require('../models/menu');


exports.index = async(req, res, next) => {
    // res.send('respond with a resource');
    const menus = await menu.find()

    res.status(200).json({
      data: menus
    })
  };




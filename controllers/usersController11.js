
  const Company = require('../models/company')

exports.index = async(req, res, next) => {
    // res.send('respond with a resource');
    const company = await Company.findOne()

    res.status(200).json({
      data: company
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

  exports.register = (req,res ,next) => {
    res.status(200).json({
      message: "hi"
    })
  }

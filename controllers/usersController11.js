
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

  // exports.company = (req, res, next) => {
  
  //   res.status(200).json({
  //       data:[{
  //           id: 1,
  //           name: 'Techno Brave Asia',
  //           address: {
  //               province: 'Bangkok',
  //               postcode: '10400'
  //           }},{
  //           id: 2,
  //           name: 'M.SOFT (Thailand)',
  //           address: {
  //               province: 'Bangkok',
  //               postcode: '10120'
  //           }},{
  //           id: 3,
  //           name: 'C.S.I. Group',
  //           address: {
  //               province: 'Bangkok',
  //               postcode: '10500'
  //           }}
      
  //   ]
  //   })

  // };
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.status(200).json({
    Fullname : 'Krittin kamkar'
  })
});

router.get('/bio', function(req, res, next) {
  
  res.status(200).json({
    fullname: 'Krittin kamkar',
    nickname: 'Aom',
    hobby:'Sleep',
    gitusername: 'Krittin33333'
  })
  
});

module.exports = router;

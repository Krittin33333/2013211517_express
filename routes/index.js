const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
  res.status(200).json({
    message: 'RESTFUL API FINAL CLASSSSSSSSS'
  })
  
});



module.exports = router;

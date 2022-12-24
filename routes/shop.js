var express = require('express');
var router = express.Router();
const shopsController = require('../controllers/shopsController')

/* GET users listing. */
router.get('/', shopsController.index);


module.exports = router;

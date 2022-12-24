var express = require('express');
var router = express.Router();
const shopsController = require('../controllers/shopsController')
const menuController = require('../controllers/menuController')

/* GET users listing. */
router.get('/', shopsController.index);
router.get('/menu', menuController.index);



module.exports = router;

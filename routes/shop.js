var express = require('express');
var router = express.Router();
const shopsController = require('../controllers/shopsController')


/* GET users listing. */
router.get('/', shopsController.index);
router.get('/menu', shopsController.menu);



module.exports = router;

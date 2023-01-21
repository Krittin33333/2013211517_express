var express = require('express');
var router = express.Router();
const shopsController = require('../controllers/shopsController')
const { body } = require('express-validator');

/* GET users listing. */
router.get('/', shopsController.index);
router.get('/menu', shopsController.menu);

router.get('/:id', shopsController.selectid);
router.post('/', shopsController.insert);



module.exports = router;

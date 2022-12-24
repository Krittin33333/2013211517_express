var express = require('express');
var router = express.Router();
const shopsController = require('../controllers/shopsController')


/* GET users listing. */
router.get('/', shopsController.index);
router.get('/menu', shopsController.menu);

router.get('/:id', shopsController.selectid);



module.exports = router;

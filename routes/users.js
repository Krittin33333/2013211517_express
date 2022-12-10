var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController11')



/* GET users listing. */
router.get('/', usersController.index);

router.get('/bio', usersController.bio);




module.exports = router;

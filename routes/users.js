var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')



/* GET users listing. */
router.get('/', usersController.index);

router.get('/bio', usersController.bio);

router.post('/', usersController.register);




module.exports = router;

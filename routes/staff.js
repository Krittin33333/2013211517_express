var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator');

/* GET users listing. */
router.get('/', staffController.index);

router.get('/:id', staffController.show);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body("salary").not().isEmpty().withMessage("กรุณาป้อนเงินเดือน").isNumeric().withMessage("กรุณาป้อนตัวเลขเงินเดือน")
], staffController.insert);

router.delete('/:id', staffController.destroy);

router.put('/:id', staffController.update);

module.exports = router;
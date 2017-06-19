var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeController');




/* GET home page. */
router.get('/',homeController.index);

//详情页
router.get('/detail/:_id',homeController.detail)

module.exports = router;

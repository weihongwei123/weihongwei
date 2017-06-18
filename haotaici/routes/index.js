var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeController');




/* GET home page. */
router.get('/',homeController.index);
//登录页面
router.get('/login',homeController.login)
//注册页面
router.get('/register',homeController.register)
//注册数据
router.post('/doRegister',homeController.doRegister);
//登录数据
router.post('/doLogin',homeController.doLogin);
//详情页
router.get('/detail/:_id',homeController.detail)
//退出登录
router.get('/loginOut',homeController.loginOut)
module.exports = router;

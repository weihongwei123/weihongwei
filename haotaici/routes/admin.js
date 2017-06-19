var express = require('express');
var router = express.Router();

var indexController = require('../controllers/admin/indexController');
/* GET users listing. */
//后台首页
router.get('/',indexController.index);
//分类列表页面
router.get('/type',indexController.type);
//添加分类页面
router.get('/addType',indexController.addType);
//添加分类数据
router.post('/addType/post',indexController.addCategory);
//删除分类数据
router.post('/delType',indexController.delType);
//修改分类页面
router.get('/editType/:_id',indexController.editType)
//修改分类数据
router.post('/updateType',indexController.updateType);
//文章列表
router.get('/article',indexController.article);
//添加文章
router.get('/addArticle',indexController.addArticle);
//添加文章数据
router.post('/addArticle/post',indexController.addArticleData);
//删除文章数据
router.post('/delArticle',indexController.delArticle);
//修改文章页面
router.get('/editArticle/:_id',indexController.editArticle);
//修改文章数据
router.post('/updateArticle',indexController.updateArticle);
//注册页面
router.get('/register',indexController.register)
//注册数据
router.post('/doRegister',indexController.doRegister);
//登录数据
router.post('/doLogin',indexController.doLogin);
//登录页面
router.get('/login',indexController.login);
//退出登录
router.get('/loginOut',indexController.loginOut)
module.exports = router;

/**
 * Created by Administrator on 2017/6/15.
 */
var mongoose = require('../configs/db_config');

var categoryModel = require('../models/categoryModel');
var articleModel = require('../models/articleModel');
var userModel = require('../models/userModel');

var homeController = {};
//首页页面
homeController.index = function(req,res,next){
   if(!req.session.user) res.redirect('/login')
    categoryModel.find(function(err,data){
        if(err){
            console.log('查询数据失败')
        }else{
            articleModel.find().populate('catId',{name:1}).exec(function(err,data1){
                if(err){
                    console.log('查询数据失败')
                }else{
                    console.log(data1);
                    res.render('index',{categoryList:data,articleList:data1});
                }
            })
        }
    })
}
homeController.detail = function(req,res,next){
    if(!req.session.user) res.redirect('/login')
    categoryModel.find(function(err,data0){
        if(err){
            console.log('查询数据失败')
        }else{
            articleModel.find(req.params,function(err,data){
                if(err){
                    console.log('no')
                }else{
                    res.render('detail',{articleList:data[0],categoryList:data0});
                }
            })
        }
    })
}
//登录页面
homeController.login = function(req,res,next){
    res.render('login')
}
//注册页面
homeController.register = function(req,res,next){
    res.render('register')
}
//注册
homeController.doRegister = function(req,res,next){
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5')
    md5.update(password);
    var md5Password = md5.digest('hex');
    console.log(md5Password)
    userModel.create({username:username,password:md5Password},function(err){
        if(err){
            res.send('no')
        }else{
            res.send('ok')
        }
    })
}
//登录
homeController.doLogin = function(req,res,next){
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5')
    md5.update(password);
    var md5Password = md5.digest('hex');
    console.log(md5Password)
    userModel.findOne({username:username,password:md5Password},function(err,data){
        if(err){
            res.send('no')
        }else{
            req.session.user = data;
            res.send('ok')
        }
    })
}
//退出登录
homeController.loginOut = function(req,res,next){
    req.session.user = null;
    res.redirect('/login')
}

module.exports = homeController;
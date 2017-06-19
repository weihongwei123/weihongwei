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
   if(!req.session.user) res.redirect('/admin/login')
    categoryModel.find(function(err,data){
        if(err){
            console.log('查询数据失败')
        }else{
            articleModel.find().populate('catId',{name:1}).exec(function(err,data1){
                if(err){
                    console.log('查询数据失败')
                }else{
                    res.render('index',{categoryList:data,articleList:data1});
                }
            })
        }
    })
}
homeController.detail = function(req,res,next){
    if(!req.session.user) res.redirect('/admin/login')
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


module.exports = homeController;
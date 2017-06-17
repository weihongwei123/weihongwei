/**
 * Created by Administrator on 2017/6/15.
 */
var mongoose = require('../configs/db_config');

var categoryModel = require('../models/categoryModel');
var articleModel = require('../models/articleModel');

var homeController = {};

homeController.index = function(req,res,next){
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
module.exports = homeController;
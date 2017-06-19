/**
 * Created by Administrator on 2017/6/15.
 */
var categoryModel = require('../../models/categoryModel');
var articleModel = require('../../models/articleModel');
var imgUpload = require('../../configs/imgUpload_config');
var userModel = require('../../models/userModel')
var indexController = {};
indexController.index = function(req,res,next){
    // if(!req.session.user) res.redirect('/admin/login')
    res.render('admin/index');

}
indexController.type = function(req,res,next){
    categoryModel.find(function(err,data){
        if(err){
            console.log(err)
        }else{
            res.render('admin/type',{datalist:data});
        }
    })
}
//添加分类的页面
indexController.addType = function(req,res,next){
    res.render('admin/addType');
}
//添加分类数据
indexController.addCategory = function(req,res,next){
    var imgPath = 'uploads';
    var imgType = ['image/gif','image/jpeg','image/png'];
    var upload = imgUpload(imgPath,imgType).single('img');
    upload(req,res,function(){
        // 把上传后的图片名称放到 req.body 里
        req.body.img = req.file.filename;
        console.log(req)
        categoryModel.create(req.body,function(err){
            if(err){
                console.log(err)
                res.send('no')
            }else{
                console.log('ok')
                res.redirect('/admin/type');
            }
        })
    });
}
//删除分类数据
indexController.delType = function(req,res,next){
    categoryModel.remove(req.body,function(err){
        if(err){
            console.log(err)
        }else{
            res.redirect('/admin/type');
        }
    })
}
//修改分类页面
indexController.editType = function(req,res,next){
    categoryModel.findOne(req.params,function(err,data){
        if(err){
            console.log(err)
        }else{
            res.render('admin/editType',{typeData:data});
        }
    })
}
//修改分类数据
indexController.updateType = function(req,res,next){
    var imgPath = 'uploads';
    var imgType = ['image/gif','image/jpeg','image/png'];
    var upload = imgUpload(imgPath,imgType).single('img');
    upload(req,res,function(){
        // 把上传后的图片名称放到 req.body 里
        if(!(req.file==undefined)){
            // 想修改图像
            req.body.img = req.file.filename;
        }
        var tj = {_id:req.body._id}
        categoryModel.update(tj,req.body,function(err){
            if(err){
                console.log(err)
            }else{
                res.redirect('/admin/type');
            }
        })
    });
}
//添加文章页面
indexController.addArticle = function(req,res,next){
    categoryModel.find(function(err,data){
        if(err){
            console.log(err)
        }else{
            res.render('admin/addArticle',{datalist:data});
        }
    })
}
//添加文章数据
indexController.addArticleData = function(req,res,next){
    var ImgPath = 'uploads';
    var ImgType = ['image/gif','image/jpeg','image/png'];
    var upload = imgUpload(ImgPath,ImgType).single('img');
    upload(req,res,function(){
        // 把上传后的图片名称放到 req.body 里
        //console.log(req.body)
        req.body.img = req.file.filename;
        articleModel.create(req.body,function(err){
            if(err){
                res.send('no')
            }else{
                res.redirect('/admin/article');
            }
        })
    });
}
//文章列表
indexController.article = function(req,res,next){
    var pageSize = 5;
    var page = req.query.page?req.query.page:1;
    articleModel.find().count(function(err,total){
        if(err){
            console.log('查询数据失败')
        }else{
            var maxPage = Math.ceil(total/pageSize);
            if(page<1) page=1;
            if(page>maxPage) page=maxPage;
            var offset = (page-1)*pageSize;
            articleModel.find().limit(pageSize).skip(offset).populate('catId',{name:1}).exec(function(err,data){
                if(err){
                    console.log('查询数据失败')
                }else{
                    res.render('admin/article',{articlelist:data,maxPage:maxPage,page:parseInt(page)});
                }
            })
        }
    })
}
//删除文章数据
indexController.delArticle = function(req,res,next){
    articleModel.remove(req.body,function(err){
        if(err){
            console.log(err)
        }else{
            res.redirect('/admin/article');
        }
    })
}
//修改文章页面
indexController.editArticle = function(req,res,next){
    articleModel.findOne(req.params).populate('catId',{name:1}).exec(function(err,data){
        console.log(req.params)
        if(err){
            console.log(err)
        }else{
            categoryModel.find(function(err,data1){
                if(err){
                    console.log(err)
                }else{
                    console.log(data1);
                    console.log(data1[0]._id)
                    console.log(data)
                    res.render('admin/editArticle',{datalist:data1,articleData:data});
                }
            })
        }
    })
}
//修改文章数据
indexController.updateArticle = function(req,res,next){
    var imgPath = 'uploads';
    var imgType = ['image/gif','image/jpeg','image/png'];
    var upload = imgUpload(imgPath,imgType).single('img');
    upload(req,res,function(){
        // 把上传后的图片名称放到 req.body 里
        if(!(req.file==undefined)){
            // 想修改图像
            req.body.img = req.file.filename;
        }
        var tj = {_id:req.body._id}
        articleModel.update(tj,req.body,function(err){
            if(err){
                console.log(err)
            }else{
                res.redirect('/admin/article');
            }
        })
    });
}
//注册页面
indexController.register = function(req,res,next){
    res.render('admin/register')
}
//注册
indexController.doRegister = function(req,res,next){
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var power = req.body.power.trim();
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5')
    md5.update(password);
    var md5Password = md5.digest('hex');
    userModel.create({username:username,password:md5Password,power:power},function(err){
        if(err){
            res.send('no')
        }else{
            res.send('ok')
        }
    })
}
//登录页面
indexController.login = function(req,res,next){
    res.render('admin/login')
}
//登录
indexController.doLogin = function(req,res,next){
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5')
    md5.update(password);
    var md5Password = md5.digest('hex');
    userModel.findOne({username:username,password:md5Password},function(err,data){
        if(err){
            res.send('no')
        }else{
            req.session.user = data;
            res.send(data)
        }
    })
}
//退出登录
indexController.loginOut = function(req,res,next){
    req.session.user = null;
    res.redirect('/admin/login')
}
module.exports = indexController;
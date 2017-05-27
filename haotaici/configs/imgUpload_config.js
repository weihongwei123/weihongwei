/**
 * Created by Administrator on 2017/6/15.
 */
var multer = require('multer');
var path = require('path');
var uid = require('uid');
var timeStamp = require('time-stamp');
var fs = require('fs');

function imgUpload(imgPath,imgType){
    var storage = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,imgPath)
        },
        filename:function(req,file,cb){
            var extname = path.extname(file.originalname)
            cb(null,'photo_'+timeStamp('YYYYMMDD')+timeStamp('HH')+'-'+uid()+extname)
        }
    })
    function fileFilter(req,file,cb){
        //var imgType = ['image/gif','image/jpeg','image/png']
        if(imgType.indexOf(file.mimetype)==-1){
            cb(null,false);
            cb(new Error('不好意思 你上传的文件规格不符合'))
        }else{
            cb(null,true)
        }
    }
    var upload = multer({
        storage:storage,
        fileFilter:fileFilter
    })
    return upload;
}
module.exports = imgUpload;
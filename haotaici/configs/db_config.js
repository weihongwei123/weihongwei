/**
 * Created by Administrator on 2017/6/14.
 */
var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/haotaici';
mongoose.connect(url,function(err){
    console.log('数据库连接成功');
});
module.exports = mongoose;
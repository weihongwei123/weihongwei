/**
 * Created by Administrator on 2017/6/14.
 */
var mongoose = require('../configs/db_config');
var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    power:{
        type:Number,
        default:0,
    }
});
var userModel = mongoose.model('user',userSchema);
module.exports = userModel;

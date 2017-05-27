/**
 * Created by Administrator on 2017/6/14.
 */
var mongoose = require('../configs/db_config');
var categorySchema = new mongoose.Schema({
    name:String,
    createTime:{
        type:Date,
        default:new Date(),
    },
    status:{
        type:Number,
        default:1,
    },
    img:{
        type:String,
        default:'',
    },
    visible:{
        type:Number,
        default:1,
    }
});
var categoryModel = mongoose.model('category',categorySchema);
module.exports = categoryModel;
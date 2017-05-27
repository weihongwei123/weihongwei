/**
 * Created by Administrator on 2017/6/16.
 */
var mongoose = require('../configs/db_config');
var articleSchema = new mongoose.Schema({
    catId:{
        type:'ObjectId',
        ref:'category',
    },
    title:{
        type:String,
        default:'',
    },
    createTime:{
        type:Date,
        default:new Date(),
    },
    author:{
        type:String,
        default:'佚名',
    },
    img:{
        type:String,
        default:'',
    },
    content:{
        type:String,
        default:'',
    },
    hot:{
        type:String,
        default:'',
    },
    best:{
        type:String,
        default:'',
    }
});
var articleModel = mongoose.model('article',articleSchema);
module.exports = articleModel;
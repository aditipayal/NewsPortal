const mongoose = require('mongoose');
const schema = mongoose.Schema;
const news = new schema({
    cname:{type:String,required:true},
    title:{type:String,unique:true},
    body:String,
    image:String,
    created_at:{type: Date, default: Date.now}
});
module.exports = mongoose.model('news',news);
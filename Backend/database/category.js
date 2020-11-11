const mongoose = require('mongoose');
const schema = mongoose.Schema;
const cat = new schema({
    cname:{type:String,unique:true},
    description:String,
    image:String,
    created_at:{type: Date, default: Date.now}
});
module.exports = mongoose.model('category',cat);

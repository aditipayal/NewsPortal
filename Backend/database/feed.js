const mongoose = require('mongoose');
const schema = mongoose.Schema;
const feed = new schema({
    name:{type:String,unique:true},
    email:String,
    mobile:String,
    message:String,
    created_at:{type: Date, default: Date.now}
});
module.exports = mongoose.model('feed',feed);

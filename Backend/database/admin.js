const mongoose = require('mongoose');
const schema = mongoose.Schema;
const admin = new schema({
    email:{type:String,unique:true},
    password:String,
    created_at:{type: Date, default: Date.now}
});
module.exports = mongoose.model('admin',admin);
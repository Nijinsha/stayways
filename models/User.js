var mongoose    = require('mongoose');
var plmongoose  = require('passport-local-mongoose');



var userSchema = new mongoose.Schema({
    email : String, 
    password : String,
    power    : String,
    joinedAt : Date


});

userSchema.plugin(plmongoose);
module.exports = mongoose.model('user',userSchema);
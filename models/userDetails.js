import mongoose from'mongoose';
import plmongoose from 'passport-local-mongoose';

var userDetailSchema = new mongoose.Schema({

    fullname    : String,
    email       : String,
    genter      : String,
    hometown    : String,
    Zipcode     : Number,
    phno        : Number

    
});

userDetailSchema.plugin(plmongoose);
module.exports = mongoose.model('userDetail',userDetailSchema);
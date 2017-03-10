import mongoose from 'mongoose';
import plmongoose from 'passport-local-mongoose';



var roomSchema = new mongoose.Schema({
    userId       : {type: mongoose.Schema.Types.ObjectId, ref: 'user'}, 
    type         : String,
    photo        : [String],
    locality     : String,
    price        : Number,
    zipcode      : Number,
    rateCount    : Number,
    reviewCount  : Number,
    Beds         : Number,
    Heading      : String,
    description  : String,
    facility     : [String]

});

roomSchema.plugin(plmongoose);
module.exports = mongoose.model('room',roomSchema);
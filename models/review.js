import mongoose from 'mongoose';
import plmongoose from 'passport-local-mongoose';



var reviewSchema = new mongoose.Schema({
    roomId   : {type: mongoose.Schema.Types.ObjectId, ref: 'room'},
    userId   : {type: mongoose.Schema.Types.ObjectId, ref: 'user'}, 
    text     : String

});

reviewSchema.plugin(plmongoose);
module.exports = mongoose.model('review',reviewSchema);
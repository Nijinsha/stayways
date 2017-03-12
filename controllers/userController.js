const   mongoose = require('mongoose'),
        passport = require('passport'),
        bodyParser = require('body-parser'),
        user = require('../models/user');

module.exports={
//user registration===================================================================
    signup:(req,res)=>{
                    user.register(
                        new user({
                            username: req.body.username,
                            joinedAt: new Date()

                        }), req.body.password,
                        function(err, users) {
                            if (!err) {
                                passport.authenticate('local')(req, res, function() {
                                    res.redirect('/');

                                });
                            }
                            else {
                            console.log(err);
                            }
                        });
    },
//user login===========================================================================
    login:(req,res)=>{
                    console.log(req.body.username,req.body.password);
                    passport.authenticate('local')(req, res, function() {
                                    res.redirect('/');

                                });
    }
}
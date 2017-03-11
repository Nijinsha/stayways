"use strict"
import express from 'express';
import bodyParser from 'body-parser';
import user from '../models/user';
import passport from 'passport';




class userRoutes{
    //registration=======================================================
    signUp(req,res){
        user.register(
            new user({
                username:req.body.email,
                joinedAt:new Date()
            }),req.body.password,(err,users)=>{
                if (!err) {
                    passport.authenticate('local')(req,res,()=>{
                        res.redirect('/');
                    });
                }
                else{
                    console.log(err);
                }
            }
        );

    }
    //login==============================================================

}
export {userRoutes};
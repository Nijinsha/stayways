"use strict"
import express from 'express';
import jwt from 'jsonwebtoken';
var user = {
    email: 'nijinsha@gmail.com',
    passowrd : 'abc123'
};
class Routes{

    home(req,res){
        res.send("sdfjhfsdiusdfgysdfgsd");
    }    

    login(req,res){
       var token = jwt.sign(user, "This is a scret", { expiresIn: '5h' });
        res.json({
            success : true,
            token : token
        });
    }

}


export { Routes }
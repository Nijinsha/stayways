import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import localStrategy from 'passport-local';
import plmongoose from 'passport-local-mongoose';
import user from './models/user';
import {indexRoutes} from './controllers/indexRoutes';
import {userRoutes} from './controllers/userRoutes';

// declarations ===========================================================================================================

const app=express();
const port=3000;
var indexRoute = new indexRoutes;
var userRoute = new userRoutes;

// db connection ==========================================================================================================
mongoose.Promise =require('bluebird');
mongoose.connect('mongodb://localhost/stayways');

// settings  ===============================================================================================================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
        secret : "Secret word goes here in production",
        resave :false,
        saveUninitialized :false}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

//Routes ======================================================================================================================
app.get('/',indexRoute.home);
app.post('/signup',userRoute.signUp);










// launch =================================================================================================================

app.listen(port,()=>{
    console.log("Magic happens on port: "+port);
});
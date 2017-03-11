"use strict"
import express from 'express';

class indexRoutes{
    home(req,res){
        res.render('home');
    }
}
export {indexRoutes};
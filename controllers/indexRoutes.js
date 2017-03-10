"use strict"
import express from 'express';

class indexRoutes{
    home(req,res){
        res.render('home2');
    }
}
export {indexRoutes};
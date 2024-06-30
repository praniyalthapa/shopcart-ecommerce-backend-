const express=require('express');

const v2Router=express.Router();

const pingRoutes=require('./pingRoutesv2');
//new api routes are added here related to v1 folder
v2Router.use('/pings',pingRoutes);





module.exports=v2Router;


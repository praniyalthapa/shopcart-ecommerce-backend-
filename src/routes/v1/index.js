const express=require('express');

const v1Router=express.Router();
const productRouter = require('./product_routes');
const pingRouter=require('./ping_routes');
//new api routes are added here related to v1 folder
v1Router.use('/products',productRouter);
v1Router.use('/ping',pingRouter);
v1Router.use('/view',pingRouter);





module.exports=v1Router;
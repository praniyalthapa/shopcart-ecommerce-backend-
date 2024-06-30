const express=require('express');

const v1Router=express.Router();
const productRouter=require('./productRoutes');
const pingRouter=require('./pingRoutes');
//new api routes are added here related to v1 folder
v1Router.use('/products',productRouter);
v1Router.use('/ping',pingRouter);




module.exports=v1Router;
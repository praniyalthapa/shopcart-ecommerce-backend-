const express=require('express');

const v1Router=express.Router();
const productRouter=require('./productRoutes');
//new api routes are added here related to v1 folder
v1Router.use('/products',productRouter)




module.exports=v1Router;
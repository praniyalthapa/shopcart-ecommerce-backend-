const express=require('express');
const v1Router=require('./v1/index');
const PingRoutesV2=require('./v2/pingRoutesv2');
const apiRouter=express.Router();


apiRouter.use('/v1',v1Router);
apiRouter.use('/v2',PingRoutesV2);




module.exports=apiRouter;

//api/v1/
//v1Router--> v1 ko index.js file
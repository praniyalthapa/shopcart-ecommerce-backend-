const express=require('express');
const PingRoutes=require('./v1/pingRoutes');
const PingRoutesV2=require('./v2/pingRoutesv2');
const apiRouter=express.Router();


apiRouter.use('/v1',PingRoutes);
apiRouter.use('/v2',PingRoutesV2);




module.exports=apiRouter;
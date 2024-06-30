const express = require('express');
const {PORT}=require('./config/server_config');

//const {configRoutes}=require('./routes/v1/pingRoutes');
//const pingRoutes=require('./routes/v1/pingRoutes');
//const pingRoutesv2=require('./routes/v2/pingRoutesv2');
const apiRouter=require('./routes/api_router');
const app = express();
// app.use('/api/v1/ping',pingRoutes);
// app.use('/api/v2/ping',pingRoutesv2);

app.use('/api',apiRouter);  //if any request comes with /api then we mapp it with something like ApiRouter

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});



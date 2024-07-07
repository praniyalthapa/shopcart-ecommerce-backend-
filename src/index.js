const express = require('express');
const {PORT}=require('./config/server_config');
const apiRouter=require('./routes/api_router');
const app = express();

app.use('/api',apiRouter);  //if any request comes with /api then we mapp it with something like ApiRouter

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});



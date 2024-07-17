const express = require('express');

const bodyParser = require('body-parser')
const responseTime = require('response-time'); //it should be after body parser
const {PORT}=require('./config/server_config');
const apiRouter=require('./routes/api_router');
const app = express();

// app.use(responseTime(function func(req,res,time){
//   console.log("Total time needed for request is ",time);
//   res.setHeader('X-Response-Time',time);
// }));

app.use(responseTime());


app.use(responseTime()); //after this function calling our bodyparser should be monitored
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',apiRouter);  //if any request comes with /api then we mapp it with something like ApiRouter

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

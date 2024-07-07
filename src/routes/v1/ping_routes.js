const express = require('express');
const {pingController}=require('../../controllers/ping_controller');

const router = express.Router();
function loggin(request,response,next){
   //next is for middleware function
   console.log("Checked login in website");
   next(); //this will go to next middleware function 
   console.log("Loggin just finished");
}
function authenticate(request,response,next){
    //next is for middleware function
    console.log("Checked authentication  in backend");
    next();
    console.log("Authenticated finished");
 }

router.get('/',[loggin,authenticate],pingController);


router.get('/account',pingController);



module.exports = router;
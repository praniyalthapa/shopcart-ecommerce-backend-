const express = require('express');
const {pingController}=require('../../controllers/ping_controller');

const router = express.Router();
// function check(req,res,next){
//     console.log("First middelware ");
//     next();
// }
// function againCheck(req,res,next){
//     console.log("Second check");
//     next();
// }
// function lastCheck(req,res,next){
//     console.log("Last check");
//     next();
// }


router.get('/',pingController);
router.get('/pingingpraniyal',pingController);



module.exports = router;
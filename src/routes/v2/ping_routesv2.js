const express = require('express');
const {pingControllerv2}=require('../../controllers/ping_controller');
const router = express.Router();

router.get('/',pingControllerv2);

router.get('/pinged',(req,res)=>{
     res.json({
        "hello":"this is new api from version 2"
     })
})
// router.get('/account',pingController);



module.exports = router;
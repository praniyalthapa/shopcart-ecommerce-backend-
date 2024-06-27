const express = require('express');
const {pingController}=require('../../controllers/pingcontroller');
const router = express.Router();

router.get('/version',(req,res)=>{
    return res.json({
        message:"this is version 2!"
    })
});


router.get('/account',pingController);



module.exports = router;
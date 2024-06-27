const express = require('express');
const {pingControllerv2}=require('../../controllers/pingcontroller');
const router = express.Router();

router.get('/version',pingControllerv2);


// router.get('/account',pingController);



module.exports = router;
const express = require('express');
const {pingController}=require('../../controllers/ping_controller');
const router = express.Router();

router.get('/',pingController);


router.get('/account',pingController);



module.exports = router;
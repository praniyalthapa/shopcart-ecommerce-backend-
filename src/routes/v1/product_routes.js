const express = require('express');
const {createProduct}=require('../../controllers/product_controller');
const productRouter = express.Router();

productRouter.post('/',createProduct); //this means first it validates from middleware and its next function will be controller






module.exports = productRouter;
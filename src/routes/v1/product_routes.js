const express = require('express');
const {createProduct}=require('../../controllers/product_controller');
const {createProductValidator}=require('../../middlewares/product_middleware');
const productRouter = express.Router();

productRouter.post('/',createProductValidator,createProduct); //this means first it validates from middleware and its next function will be controller.It maps routes to a controller






module.exports = productRouter;
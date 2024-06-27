const express = require('express');

const productRouter = express.Router();

productRouter.get('/',(request,response)=>{  //if there is nothing we will hit this / 
     return response.json({
        message:"These are your product",
        products:[]
     });
});
productRouter.post('/create',(request,response)=>{  //if there is nothing we will hit this / 
    return response.json({
       message:"Apple",
       products:['100','260','780']
    });
});





module.exports = productRouter;
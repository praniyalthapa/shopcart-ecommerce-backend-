function createProduct(request,response){
     try {
        //some fixed parameter are defined
         response.json({
            success:true,  //whether the request is success or not
            error:[],
            message:'Successfully created product',
            data:{
                id:Math.random()*(30),
                title:'',
                description:'',
                category:'',
                price:0,
                image:''
            }

         })

        
     } catch (error) {
        console.log("Error occurred",error);
     }
}

module.exports= {
    createProduct
}


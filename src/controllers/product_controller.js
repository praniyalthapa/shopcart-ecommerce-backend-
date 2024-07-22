// function createProduct(request,response){
//     try {
//        //some fixed parameter are defined
//         response.json({
//            success:true,  //whether the request is success or not
//            error:[],
//            message:'Successfully created product',
//            data:{
//                id:Math.random()*(30),
//                title:'',
//                description:'',
//                category:'',
//                price:0,
//                image:''
//            }

//         })

       
//     } catch (error) {
//        console.log("Error occurred",error);
//     }
// }
// module.exports= {
//    createProduct
// }
function createProduct(req,res){
    try {
      return res.json({
         success:true,
         error:{},
      message:'We have successfully createad product congratulation!!',
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
module.exports={
   createProduct
};
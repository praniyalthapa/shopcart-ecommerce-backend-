

function createProductValidator(req, res, next) {
   // console.log("Request Body in Middleware:", req.body); // Log the request body in middleware

    if (!req.body.title) {
       // return res.json(errorResponse('discription is not present'),{message:'description is not present'});
          return res.json({
            success:false,
            data:{},
            message:'You have missed to input title parameter',
            error:{
                message:'Request body is missing so we gave you error!!Check it once!!Thank you!!'
            }
          })  
    }
    //if everthing looks good
    next();
}

module.exports = {createProductValidator};

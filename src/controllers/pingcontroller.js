// function pingController(req,res){
//     return res.json({
//           message:'hello world!'
//     })
// }

// module.exports={
//     pingController
// }
function pingController(request, response) {
    return response.json({
        message: 'hello world!'
    });
}

module.exports = {
    pingController
};

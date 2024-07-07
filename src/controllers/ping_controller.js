
function pingController(request, response) {
    console.log("Controller is hit after next of middlware first");
    return response.json({
        message: 'Ok from v1 routes'
    });
}

function pingControllerv2(request,response){
    return response.json({
        message:'Ok from v2 routes'
    });
}


module.exports = {
    pingController,
    pingControllerv2,
   
};

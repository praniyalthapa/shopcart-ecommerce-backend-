
function pingController(request, response) {
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
    pingControllerv2
};

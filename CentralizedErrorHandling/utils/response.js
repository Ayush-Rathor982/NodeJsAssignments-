const sendErrorResponse = (res,error,statusCode)=>{
    res.status(statusCode).json({error: error.message});
}

const sendSuccessResponse = (res,data,statusCode) =>{
    res.status(statusCode).json({data})
}

module.exports = {
    sendErrorResponse,
    sendSuccessResponse
}
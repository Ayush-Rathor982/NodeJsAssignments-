const {
    sendErrorResponse,
    sendSuccessResponse
} = require('../utils/response');
    
const getUsers = (req,res)=>{
    res.send("<h1>Fetching all users</h1>");
}

const getUserById = (req,res)=>{

    try{
        if(parseInt(req.params.id) > 10){
            let error = new Error("User ID is Invalid");
            error.status = 400;
            throw error;
        }
        res.send(`<h1>Fetching user with ID: ${req.params.id}</h1>`);
    }
    catch(err){
        sendErrorResponse(res, err, err.status);
    }
   
}

const addUser = (req,res)=>{
    res.send("<h1>Adding a new user</h1>");
}

module.exports = {
    getUsers,
    getUserById,
    addUser
}

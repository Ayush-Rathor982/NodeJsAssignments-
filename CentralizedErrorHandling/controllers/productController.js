const productServices = require('../services/productService');
const {
    sendErrorResponse,
    sendSuccessResponse
} = require('../utils/response');

const path = require('path');

const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","products.html"));
}

const getProductById =(req,res)=>{
    try{
        if(parseInt(req.params.id) > 10){
            let err = new Error("Product ID is required");
            err.status = 400;
            throw err;
        }
        // res.send(productServices.sendResponseById(req.params.id))
        sendSuccessResponse(res,`Product with ID: ${req.params.id} fetched successfully`,200)
    }
    catch(error) {
        sendErrorResponse(res,error,error.status)
    }

    
    
}

const addProduct = (req,res)=>{

    try{

        const product = req.body;

        if(!product || !product.productName){
            let err = new Error("Product not found");
            err.status = 400;
            throw err;
        }

        console.log("Product recieved from client: ",product)
        res.json({value : product.productName});

        
        // res.send(productServices.sendResponseById(req.params.id))
        // sendSuccessResponse(res,`Product with ID: ${req.params.id} fetched successfully`,200)
    }
    catch(error) {
        sendErrorResponse(res,error,error.status)
    }
}

module.exports = {
    getProducts,
    getProductById,
    addProduct
}

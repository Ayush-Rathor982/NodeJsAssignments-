const productServices = require('../services/productService');

const getProducts = (req,res)=>{
    res.send(productServices.sendResponse());
}

const getProductById =(req,res)=>{
    res.send(productServices.sendResponseById(req.params.id))
}

const addProduct = (req,res)=>{
    res.send(productServices.sendResponseForAddProduct());
}

module.exports = {
    getProducts,
    getProductById,
    addProduct
}

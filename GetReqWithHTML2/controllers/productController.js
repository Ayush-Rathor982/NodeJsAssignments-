const productServices = require('../services/productService');

const path = require('path');

const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","products.html"));
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

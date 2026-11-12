const productServices = require('../services/productService');

const path = require('path');

const getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","products.html"));
}

const getProductById =(req,res)=>{
    res.send(productServices.sendResponseById(req.params.id))
}

const addProduct = (req,res)=>{
    const product = req.body;
    console.log("Product recieved from client: ",product)
    res.send(product);
}

module.exports = {
    getProducts,
    getProductById,
    addProduct
}

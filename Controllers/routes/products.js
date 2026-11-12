const express = require('express');
const productsController = require('../controllers/productControllers');
// console.log("jknn:",productsController)
const router = express.Router();



router.get("/", productsController.getProducts)

router.get("/:id", productsController.getProductById)

router.post("/", productsController.addProduct);

module.exports = router;
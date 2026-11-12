const express = require('express');
const productsController = require('../controllers/productController');

const router = express.Router();



router.get("/", productsController.getProducts)

router.get("/:id", productsController.getProductById)

router.post("/", productsController.addProduct);

module.exports = router;
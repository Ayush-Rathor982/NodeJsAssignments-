const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get("/:userId", cartController.getCartByUserId)

router.post("/:userId", cartController.addCartByUserId)

module.exports = router;
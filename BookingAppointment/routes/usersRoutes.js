const express = require('express');
const userController = require('../controllers/userControllers'); 

const router = express.Router();

router.get('/',userController.getUsers)
router.post('/',userController.addUser);
router.delete('/:id',userController.deleteUser)

module.exports = router;
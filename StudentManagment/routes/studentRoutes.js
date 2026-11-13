const express = require('express');
const studentController = require('../controllers/studentController')

const router = express.Router();



router.get('/',studentController.getStudents)
router.get('/:id',studentController.getStudentById)
router.post('/',studentController.addStudent)
router.put('/:id',studentController.updateStudentById)
router.delete('/:id',studentController.deleteStudentById)

module.exports = router;
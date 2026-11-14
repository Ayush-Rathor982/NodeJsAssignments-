const express = require('express');
const studentController = require('../controllers/studentController')

const router = express.Router();



router.get('/',studentController.getStudents)
router.get('/:id',studentController.getStudentById)
router.post('/add',studentController.addStudent)
router.put('/update/:id',studentController.updateStudentById)
router.delete('/delete/:id',studentController.deleteStudentById)
router.post('/addingStudentWithCard',studentController.addingValuesToStudentAndIdentityTable)

module.exports = router;
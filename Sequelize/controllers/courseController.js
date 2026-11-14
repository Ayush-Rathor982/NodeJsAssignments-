const Course = require('../models/courses')
const Student = require('../models/student')

const addCourse = async (req,res) => {
    try {
        const {name} = req.body;
        const course = await Course.create({'name':name});

        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({'error':error.message})
    }
}

const addStudentsToCourses = async (req,res) => {

    try {
        const {studentId,courseIds} = req.body;

        console.log("kjhjkn: ",studentId,courseIds)

        const student = await Student.findByPk(studentId);

        console.log("student: ",student);

        const course = await Course.findAll({
            where : {
                id : courseIds
            }
        });

        console.log("courses: ",course)

        await student.addCourse(course);


        console.log("Done till here")

        const updatedStudent = await Student.findByPk(studentId,{include:Course})

        console.log("update student: ",updatedStudent)

        res.status(200).json(updatedStudent)

    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    addCourse,
    addStudentsToCourses
}

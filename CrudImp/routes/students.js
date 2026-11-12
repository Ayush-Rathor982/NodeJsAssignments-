const express = require('express');

const students = require('../data/students');
const router = express.Router();

router.get("/", (req,res)=>{
    let studentList = students.map(student => {
        return student.name
    })

    res.send(`Students: ${studentList.join(", ")}`);
})

router.get("/:id", (req,res)=>{
    let student = students.find(student => student.id === parseInt(req.params.id));
    if(!student){
        return res.status(404).send("Student not found");
    }
    res.send(`Student: ${student.name}`);
})

module.exports = router;
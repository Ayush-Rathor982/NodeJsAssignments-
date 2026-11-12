const express = require('express');

const courses = require('../data/courses');
const router = express.Router();

router.get("/", (req,res)=>{

    let courseList = courses.map(course => {
        return course.name
    })
    res.send(`Courses: ${courseList.join(", ")}`);
})

router.get("/:id", (req,res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course){
        return res.status(404).send("Course not found");
    }
    res.send(`Course: ${course.name}, Description: ${course.description}`)
})

module.exports = router;
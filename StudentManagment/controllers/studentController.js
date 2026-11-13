const db = require('../utils/db-connection')

const getStudents = (req,res) => {

    const findQuery = `select * from students`

    db.execute(findQuery,[],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("student not found");
            return ;
        }

        res.status(200).send(result);
    })
}


const getStudentById = (req,res) => {

    const {id} = req.params

    const findQuery = `select * from students where id = ?`

    db.execute(findQuery,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("student not found");
            return ;
        }

        res.status(200).send(result);
    })
}



const addStudent= (req,res) => {

    const {name, email, age} = req.body

    console.log("data :",name, email, age)

    const insertQuery = `insert into students(name, email, age) values(?,?,?)`

    db.execute(insertQuery,[name,email,age],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("student not added");
            return ;
        }


        res.status(200).send(result);
    })
}


const updateStudentById = (req,res) => {

    const {id} = req.params

    const {name, email, age} = req.body

    const updateQuery = `update students set name = ?, email = ?, age = ? where id = ?`

    db.execute(updateQuery,[name, email, age, id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("student not found");
            return ;
        }

        res.status(200).send(result);
    })
}



const deleteStudentById = (req,res) => {

    const {id} = req.params

    const deleteQuery = `delete from students where id = ?`

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("student not found");
            return ;
        }

        res.status(200).send(result);
    })
}




module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById
}
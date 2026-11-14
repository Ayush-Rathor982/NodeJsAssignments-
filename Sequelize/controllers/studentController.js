const db = require('../utils/db-connection')

const Student = require('../models/student')
const IdentityCard = require('../models/identitycard')

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



const addStudent= async (req,res) => {

    try {
        const {name, email} = req.body

        console.log("data :",name, email)

        const student = await Student.create({
            email : email,
            name : name
        });

        res.status(200).send("student added")

    } catch (error) {
        res.status(500).send("unable to make entry")
    }

    // const insertQuery = `insert into students(name, email, age) values(?,?,?)`

    // db.execute(insertQuery,[name,email,age],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return
    //     }

    //     if(result.affectedRows===0){
    //         res.status(404).send("student not added");
    //         return ;
    //     }


    //     res.status(200).send(result);
    // })
}


const addingValuesToStudentAndIdentityTable = async (req,res) => {
    // console.log("bhbkjnnj")
    try {
        const student = await Student.create(req.body.student);
        // console.log("kjhhjjj: ",student.id)
        const idCard = await IdentityCard.create({
            ...req.body.IdentityCard,
            studentId : student.id
        });

        res.status(201).json({student,idCard})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


const updateStudentById = async(req,res) => {

    try {
        const {id} = req.params

        const {name, email} = req.body

        const student = await Student.findByPk(id);

        if(!student){
            res.status(404).send("Student not found")
        }

        student.name = name;
        student.email = email;

        await student.save();

        res.status(200).send("student updated")

    } catch (error) {
        res.status(500).send("unable to update")
    }

    // const updateQuery = `update students set name = ?, email = ?, age = ? where id = ?`

    // db.execute(updateQuery,[name, email, age, id],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return
    //     }

    //     if(result.affectedRows===0){
    //         res.status(404).send("student not found");
    //         return ;
    //     }

    //     res.status(200).send(result);
    // })
}



const deleteStudentById = async (req,res) => {

    

    try {

        const {id} = req.params

        const student = await Student.destroy({
            where:{
                id:id
            }
        })
        
        if(!student){
            res.status(404).send("Student not found")
        }
        

        res.status(200).send("user is deleted")
        
    } catch (error) {
        res.status(500).send("Error while deleting");
    }

    // const deleteQuery = `delete from students where id = ?`

    // db.execute(deleteQuery,[id],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return
    //     }

    //     if(result.affectedRows===0){
    //         res.status(404).send("student not found");
    //         return ;
    //     }

    //     res.status(200).send(result);
    // })
}




module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById,
    addingValuesToStudentAndIdentityTable
}
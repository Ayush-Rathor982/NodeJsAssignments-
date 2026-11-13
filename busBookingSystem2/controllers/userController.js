const db = require('../utils/db-connection')

const getUsers = (req,res) => {

    const findQuery = `select * from Users`

    db.execute(findQuery,[],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("users not found");
            return ;
        }

        res.status(200).send(result);
    })
}



const addUsers = (req,res) => {

    const {name, email} = req.body

    console.log("data :",name, email)

    const insertQuery = `insert into Users(name, email) values(?,?)`

    db.execute(insertQuery,[name,email],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("user not found");
            return ;
        }


        res.status(200).send(result);
    })
}


module.exports = {
    getUsers,
    addUsers
}
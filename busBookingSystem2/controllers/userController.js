const db = require('../utils/db-connection')
const Users = require('../models/Users')

const getUsers = async (req,res) => {

    try {
        const users = await Users.findAll();

        if(users.length === 0){
            res.status(404).send("users not found");
        }
        res.status(200).send(users);
        
    } catch (error) {
        res.status(500).send(error.message);
    }

    // const findQuery = `select * from Users`

    // db.execute(findQuery,[],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return
    //     }

    //     if(result.affectedRows===0){
    //         res.status(404).send("users not found");
    //         return ;
    //     }

    //     res.status(200).send(result);
    // })
}



const addUsers = async(req,res) => {

    try {

        const {name, email} = req.body

        console.log("data :",name, email)

        const user = await Users.create({
            name : name,
            email : email
        })

        res.status(200).send('user added: ',user);
        
    } catch (error) {
        res.status(500).send(err.message);
    }

    const insertQuery = `insert into Users(name, email) values(?,?)`

    // db.execute(insertQuery,[name,email],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return
    //     }

    //     if(result.affectedRows===0){
    //         res.status(404).send("user not found");
    //         return ;
    //     }


    //     res.status(200).send(result);
    // })
}


module.exports = {
    getUsers,
    addUsers
}
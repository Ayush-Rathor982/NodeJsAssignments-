const Users = require('../models/Users')


const getUsers = async (req,res) =>{

    try {
        const users = await Users.findAll();

        console.log("fetch users successfully: ",users);

        res.status(200).send(users);

    } catch (error) {
        res.status(500).send("Error occurs while fetching user")
    }

    
}

const addUser = async (req,res) => {
    try {
        
        const {username, phone, email} = req.body;

        console.log("user data recieved: ",username, phone, email);

        const user = await Users.create({
            username : username,
            phone : phone,
            email : email
        })

        if(!user){
            return res.status(500).send("user not added");
        }

        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).send("Error occurs while inserting user")
    }
}


const deleteUser = async (req,res) => {

    try {

        const {id} = req.params

        const user = await Users.destroy({
            where:{
                id:id
            }
        })
        
        if(!user){
            res.status(404).send("user not found")
        }
        

        res.status(200).json({
            message : "user is deleted"
        })
        
    } catch (error) {
        res.status(500).send("Error while deleting");
    }


}

module.exports = {
    getUsers,
    addUser,
    deleteUser
}
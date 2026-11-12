const getUsers = (req,res)=>{
    res.send("Fetching all users");
}

const getUserById = (req,res)=>{
    res.send(`Fetching user with ID: ${req.params.id}`)
}

const addUser = (req,res)=>{
    res.send("Adding a new user");
}

module.exports = {
    getUsers,
    getUserById,
    addUser
}

const express = require("express");

const app = express();

app.get("/welcome/:username", (req,res)=>{
    const name  = req.params.username;
    const role = req.query.role;

    res.send(`<h1>Welcome ${name}, your role is ${role}</h1>`)
})


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})
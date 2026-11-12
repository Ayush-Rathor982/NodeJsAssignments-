const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Fetching all users");
})

router.get("/:id", (req,res)=>{
    res.send(`Fetching user with ID: ${req.params.id}`)
})

router.post("/", (req,res)=>{
    res.send("Adding a new user");
});

module.exports = router;
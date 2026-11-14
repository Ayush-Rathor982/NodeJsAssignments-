const express = require("express");
const userRoutes = require('./routes/usersRoutes')
const db = require('./utils/db-connection')
const path = require('path');


const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
})

app.use('/api/users',userRoutes);


db.sync({force:true}).then(()=>{
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    })
})
.catch(err=>{
    console.log(err)
})

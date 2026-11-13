const express = require('express');
const mysql = require('mysql2');

const app = express();

const dbConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'testdb'
})

dbConnection.connect(err=>{
    if(err){
        console.log(err)
        return
    }

    console.log("connection created")

    const createQuery = `create table students(
    id INT AUTO_INCREMENT primary key,
    name VARCHAR(55) not null,
    email VARCHAR(55) not null
    )`;


    dbConnection.execute(createQuery,(err)=>{
        if(err){
            console.log(err)
            return
        }

        console.log("table created")
    })
    
})





app.get('/', (req, res) => {
     res.send('Hello World!');
});

app.listen(3000, () => {
     console.log('Server is running on port 3000');
})
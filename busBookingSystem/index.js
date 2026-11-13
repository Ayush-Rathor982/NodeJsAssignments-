const express = require('express');
const mysql = require('mysql2');

const app = express();

const dbConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'busbookingdb'
})

dbConnection.connect(err=>{
    if(err){
        console.log(err)
        return
    }

    console.log("connection created")

    let createQuery = `create table Users(
    id INT AUTO_INCREMENT primary key,
    name VARCHAR(55) not null,
    email VARCHAR(55) not null
    )`;


    dbConnection.execute(createQuery,(err)=>{
        if(err){
            console.log(err)
            return
        }

        console.log("users table created")
    })

    createQuery = `create table Buses(
    id INT AUTO_INCREMENT primary key,
    busNumber VARCHAR(55) not null,
    totalSeats INT not null,
    availableSeats Int not null
    )`;


    dbConnection.execute(createQuery,(err)=>{
        if(err){
            console.log(err)
            return
        }

        console.log("buses table created")
    })

    createQuery = `create table Bookings(
    id INT AUTO_INCREMENT primary key,
    seatNumber Int not null
    )`;


    dbConnection.execute(createQuery,(err)=>{
        if(err){
            console.log(err)
            return
        }

        console.log("booking table created")
    })

    createQuery = `create table Payments(
    id INT AUTO_INCREMENT primary key,
    amountPaid Int not null,
    paymentStauts varchar(50) not null
    )`;


    dbConnection.execute(createQuery,(err)=>{
        if(err){
            console.log(err)
            return
        }

        console.log("payments table created")
    })
    
})





app.get('/', (req, res) => {
     res.send('Hello World!');
});

app.listen(3000, () => {
     console.log('Server is running on port 3000');
})
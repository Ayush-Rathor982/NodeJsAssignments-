const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('busbookingdb','root','1234',{
    host : 'localhost',
    dialect : 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been created')
    } catch (error) {
        console.log(error)
    }
})();


module.exports = sequelize;



// const dbConnection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '1234',
//     database : 'busbookingdb'
// })

// dbConnection.connect(err=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log("connection created")

//     let createQuery = `create table if not exists Users(
//     id INT AUTO_INCREMENT primary key,
//     name VARCHAR(55) not null,
//     email VARCHAR(55) not null
//     )`;


//     dbConnection.execute(createQuery,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//         console.log("users table created")
//     })

//     createQuery = `create table if not exists Buses(
//     id INT AUTO_INCREMENT primary key,
//     busNumber VARCHAR(55) not null,
//     totalSeats INT not null,
//     availableSeats Int not null
//     )`;


//     dbConnection.execute(createQuery,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//         console.log("buses table created")
//     })

//     createQuery = `create table if not exists Bookings(
//     id INT AUTO_INCREMENT primary key,
//     seatNumber Int not null
//     )`;


//     dbConnection.execute(createQuery,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//         console.log("booking table created")
//     })

//     createQuery = `create table if not exists Payments(
//     id INT AUTO_INCREMENT primary key,
//     amountPaid Int not null,
//     paymentStauts varchar(50) not null
//     )`;


//     dbConnection.execute(createQuery,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//         console.log("payments table created")
//     })
    
// })


// module.exports = dbConnection;
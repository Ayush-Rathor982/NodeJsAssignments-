const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('booking_appointment_db','root','1234',{
    host : 'localhost',
    dialect : 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('database connection setup successfully');
    } catch (error) {
        console.log(error)
    }
});

module.exports = sequelize;


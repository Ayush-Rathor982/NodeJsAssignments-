const {Sequelize,  DataTypes} = require('sequelize')
const sequelize = require('../utils/db-connection');


const courses = sequelize.define('courses',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey : true,
        allowNull : false
    },
    name : {
        type:DataTypes.STRING,
        allowNull:false,
    }
})

module.exports = courses;

 
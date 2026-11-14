const {Sequelize,  DataTypes} = require('sequelize')
const sequelize = require('../utils/db-connection');


const department = sequelize.define('department',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey : true,
        allowNull : false
    },
    name : {
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})

module.exports = department;


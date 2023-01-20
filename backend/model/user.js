const { DataTypes } = require("sequelize");
const sequelize = require("../database");


const User =  sequelize.define('users',{
    fname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    zipCode:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },savedProduct:{
        type:DataTypes.ARRAY(DataTypes.JSON),
        allowNull:false,
        defaultValue:[]
    }

})

console.log("User Table is OK")

module.exports=User
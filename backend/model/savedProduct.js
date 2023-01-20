const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const SavedProduct = sequelize.define("savedProduct", {
    email:{
        type: DataTypes.STRING
    },
    googleId:{
        type: DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    roomName:{
        type:DataTypes.STRING
    },
    item:{
        type:DataTypes.STRING
    },
    installation:{
        type:DataTypes.STRING
    },
    isPole:{
        type:DataTypes.STRING
    },
    height:{
        type:DataTypes.FLOAT

    },
    width:{
        type:DataTypes.FLOAT
    },
    panel:{
        type:DataTypes.STRING
    },
    look:{
        type:DataTypes.STRING
    },
    lining:{
        type:DataTypes.STRING
    },
    poleAndTrack:{
        type:DataTypes.STRING
    },
    glide:{
        type:DataTypes.STRING
    },
    corded:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.FLOAT
    }
})

module.exports = SavedProduct
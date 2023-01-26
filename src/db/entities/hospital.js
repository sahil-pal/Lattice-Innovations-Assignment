const {DataTypes} = require('sequelize');
const sequealize = require('../../utils/database');

const Hospitals = sequealize.define("HOSPITALS",
    {
        Id:{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        Name : {
            type : DataTypes.STRING,
        }
    }
);

module.exports = Hospitals;
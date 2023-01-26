const {DataTypes} = require('sequelize');
const sequealize = require('../../utils/database');

const Psychiatrists = sequealize.define("PSYCHIATRISTS",
    {
        Id:{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        // Hospital_id:{
        //     type : Sequealize.INTEGER,
        // },
        Name : {
            type : DataTypes.STRING,
        }
        
    }
);
module.exports = Psychiatrists;
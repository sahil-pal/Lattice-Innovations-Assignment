const {DataTypes} = require('sequelize');
const sequealize = require('../../utils/database');

const Patients = sequealize.define("PATIENTS",
    {
        Id:{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        // Psyc_id:{
        //     type : Sequealize.INTEGER,
        // },
        Name : {
            type : DataTypes.STRING,
        },
        Address : {
            type : DataTypes.STRING,
        },
        Email : {
            type : DataTypes.STRING,
        },
        Phonenumber : {
            type : DataTypes.STRING,
        },
        Password : {
            type : DataTypes.STRING,
        },
        Photo : {
            type : DataTypes.STRING,
        },
    }
);

module.exports = Patients;
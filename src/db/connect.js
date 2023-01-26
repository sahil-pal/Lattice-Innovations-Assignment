const sequealize = require('../utils/database.js');
const Sequealize = require('sequelize');
const Patients = require("./entities/patients.js");
const Psychiatrists = require('./entities/psychiatrist');
const Hospitals = require('./entities/hospital');

const db = {
    connect(){

        Psychiatrists.hasMany(Patients, {foreignKey: "Psyc_id",as: "Patient Details"});
        Patients.belongsTo(Psychiatrists, {
            foreignKey: "Psyc_id",
            as: "Psychiatrists",
        });
        Hospitals.hasMany(Psychiatrists, { foreignKey: "Hospital_id",as: "Psychiatrist Details" });
        Psychiatrists.belongsTo(Hospitals, {
            foreignKey: "Hospital_id",
            as: "Hospital",
        });

        sequealize
            .sync({force:false})
            .then(
                (result)=>{
                    console.log(`Database Connection Established...`);
                }
            )
            .catch(
                (err)=>{
                    console.log(`DB Connection Failed ! : ${err}`);
                }
            );
    }
}

module.exports = db;
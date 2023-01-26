const {SUCCESS,SERVER_ERROR,BAD_REQUEST} = require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const patientServices = require("../db/services/patient_service");
const PatientSchema = require('../models/patient');

module.exports = patientController = {

    async addPatientRecord(req,res){

        const patientObj = {
            ... req.body,
            photo : req.file.path
        };

        const {error,value} = PatientSchema.validate(patientObj,{abortEarly:false});
        if(error){
            let formErrors = [];
            error.details.forEach((e)=>{
                formErrors.push(e.message);
            })
            return res.status(BAD_REQUEST).json({"errors" : formErrors});
        }

        const promise = patientServices.add(patientObj);
        promise.then(()=>{
            res.status(SUCCESS).json({message: messageBundle["patient.add.success"] });
        }).catch((err)=>{
            console.log(err);
            res.status(SERVER_ERROR).json({message: messageBundle["patient.add.failed"]});
        });
    }

};
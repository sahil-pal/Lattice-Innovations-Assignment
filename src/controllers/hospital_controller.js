const { SUCCESS, SERVER_ERROR, NOT_FOUND } =require("../utils/config").STATUS_CODES;
const messageBundle = require("../locales/en");
const hospitalServices = require('../db/services/hospital_service');

const hospital_controller = {
  
    async viewHospitalByID(req,res){
        
        const hospitalID = req.query.id;
        const result = hospitalServices.getRecordByHospitalID(hospitalID);
        result.then((hospitalDetail)=>{
            if(hospitalDetail.length > 0){
                res.status(SUCCESS).json({"result" : hospitalDetail});
            }
            else{
                res.status(NOT_FOUND).json({message: messageBundle["hospital.view.notfound"]});
            }
        }).catch((err)=>{
            res.status(SERVER_ERROR).json({message: messageBundle["hospital.view.failed"]});
        });
    }
};

module.exports = hospital_controller;

const Hospital = require('../entities/hospital');
const Patients = require('../entities/patients');
const Psychiatrists = require('../entities/psychiatrist');

const hospitalServices = {

    async getRecordByHospitalID(hospitalID){
        const hospitalDetail = await Hospital.findAll({
            include:[
                {
                    model: Psychiatrists,
                    include: [{
                        model: Patients,
                        as : "Patient Details"
                    }],
                    required: false,
                    as:"Psychiatrist Details"
                }
            ],
            where: {
                id: [hospitalID]
            }
        });
        return hospitalDetail;
    }
}

module.exports = hospitalServices;
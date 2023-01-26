const Patients = require('../entities/patients');

const patientServices = {

    async add(patientObj){
        const patientRecord = await Patients.create(
            {
                Psyc_id : patientObj.psyc_id,
                Name : patientObj.name,
                Address : patientObj.address,
                Email : patientObj.email,
                Phonenumber : patientObj.phonenumber,
                Password : patientObj.password,
                Photo : patientObj.photo
            }
        );
        patientRecord.save();
    }
}

module.exports = patientServices;
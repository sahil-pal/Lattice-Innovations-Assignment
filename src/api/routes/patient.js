const express = require('express');
const router = express.Router();
const {ADD_PATIENT} = require('../../utils/config').ROUTES.PATIENT;
const {addPatientRecord} = require('../../controllers/patient_controller');
const multer = require('multer');
const storage = require('../../utils/storage');
const uploadedImg = multer({storage:storage});

router.post(ADD_PATIENT,uploadedImg.single('photo'),addPatientRecord);

module.exports = router;
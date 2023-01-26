const express = require('express');
const router = express.Router();
const {VIEW_BY_ID} = require('../../utils/config').ROUTES.HOSPITAL;
const {viewHospitalByID} = require('../../controllers/hospital_controller');

router.get(VIEW_BY_ID,viewHospitalByID);

module.exports = router;
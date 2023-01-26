const Joi = require('joi');

const PatientSchema = Joi.object({
    psyc_id : Joi.number().required(),
    name : Joi.string().required(),
    address : Joi.string().min(10).required(),
    email : Joi.string().email().required(),
    phonenumber : Joi.string().length(12),
    password : Joi.string().min(8).max(15).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),
    photo : Joi.string().required(),
})

module.exports = PatientSchema;
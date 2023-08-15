const Joi = require("joi");
const { emailRegexp } = require("../models/userModels");

const signinSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = signinSchema;

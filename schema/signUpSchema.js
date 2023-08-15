const Joi = require("joi");
const { emailRegexp } = require("../models/userModels");

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = signupSchema;

const Joi = require("joi");

const commentSchema = Joi.object({
  body: Joi.string().required(),
  name: Joi.string(),
  postId: Joi.number(),
});

module.exports = commentSchema;

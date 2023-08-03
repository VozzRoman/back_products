const Joi = require("joi");

const productSchema = Joi.object({
  brand: Joi.string().required(),
  category: Joi.string().required(),
  count: Joi.number(),
  description: Joi.string(),
  discountPercentage: Joi.number(),
  images: Joi.string(),
  price: Joi.number().required(),
  rating: Joi.number(),
  stock: Joi.number().required(),
  thumbnail: Joi.string(),
  title: Joi.string().required(),
  totalPrice: Joi.number(),
  favorite: Joi.boolean(),
});

module.exports = productSchema;

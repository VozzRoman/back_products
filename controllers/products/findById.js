const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");
const { isValidObjectId } = require("mongoose");
const createError = require("http-errors");

const findProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw createError(400, "id is not valid");
  }
  const product = await productModels.findById(id);
  if (!product) {
    throw createError(404, "unable to find id");
  }

  res.status(200).json({ code: 200, status: "ok", data: product });
});

module.exports = findProductById;

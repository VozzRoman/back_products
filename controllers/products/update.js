const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");
const { isValidObjectId } = require("mongoose");
const createError = require("http-errors");
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw createError(400, "id is not valid");
  }
  const product = await productModels.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!product) {
    throw createError(404, "unable to find id");
  }
  res.status(200).json({ code: 200, data: product });
});
module.exports = updateProduct;
//

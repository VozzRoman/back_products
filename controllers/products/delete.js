const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");
const { isValidObjectId } = require("mongoose");
const createError = require("http-errors");
const deleteProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw createError(400, "id is not valid");
  }
  const product = await productModels.findByIdAndDelete(id);
  if (!product) {
    throw createError(404, "unable to find id");
  }
  res.status(204).json({ code: 204, status: "ok" });
});

module.exports = deleteProducts;

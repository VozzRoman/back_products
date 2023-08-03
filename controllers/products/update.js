const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");
const { isValidObjectId } = require("mongoose");

const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("id is not valid");
  }
  const product = await productModels.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!product) {
    res.status(400);
    throw new Error("Unable to update products");
  }
  res.status(200).json({ code: 200, data: product });
});
module.exports = updateProduct;

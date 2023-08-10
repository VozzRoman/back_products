const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");

const addProduct = asyncHandler(async (req, res) => {
  const product = await productModels.create({ ...req.body });
  res.status(200).json({
    code: 200,
    status: "ok",
    data: product,
  });
});

module.exports = addProduct;

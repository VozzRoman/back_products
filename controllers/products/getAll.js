const productModel = require("../../models/productModels");
const asyncHandler = require("express-async-handler");
const getAllProducts = asyncHandler(async (req, res) => {
  console.log("good");
  const products = await productModel.find({});
  console.log(products);
  if (!products) {
    res.status(400);
    throw new Error("Unable to fetch");
  }
  res.status(200).json({
    code: 200,
    status: "ok",
    data: products,
    total: products.length,
  });
});

module.exports = getAllProducts;

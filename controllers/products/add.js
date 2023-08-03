const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");
const { productSchema } = require("../../schema");

const addProduct = asyncHandler(async (req, res) => {
  const { title, price, brand, stock, category } = req.body;
  if (!title || !price || !brand || !stock || !category) {
    res.status(400).json({ code: 400, message: "please provide all fields" });
    throw new Error("please provide all fields");
  }

  const product = await productModels.create({ ...req.body });
  if (!product) {
    throw new Error("Unable to save data");
  }
  res.status(200).json({
    code: 200,
    status: "ok",
    data: product,
  });
});

module.exports = addProduct;

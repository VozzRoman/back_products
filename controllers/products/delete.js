const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");
const { isValidObjectId } = require("mongoose");

const deleteProducts = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("id is not valid");
  }
  const product = await productModels.findByIdAndDelete(id);
  if (!product) {
    res.status(400).json({
      code: 400,
      message: `Unable to delete with id:${id} `,
    });
    throw new Error(`Unable to delete product with id 
		: ${id} `);
  }
  res.status(200).json({ code: 200, status: "ok" });
});

module.exports = deleteProducts;

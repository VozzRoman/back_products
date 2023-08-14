const asyncHandler = require("express-async-handler");
const createError = require("http-errors");
const { isValidObjectId } = require("mongoose");
const CommentsModel = require("../../models/commentsModel");

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw createError(400, "id is not valid");
  }
  const product = await CommentsModel.findByIdAndDelete(id);
  if (!product) {
    throw createError(401, "unable to find id");
  }
  console.log("Remove");
  res.status(203).json({ statsu: "delete successfilly", data: product });
});

module.exports = remove;

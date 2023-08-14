const asyncHandler = require("express-async-handler");
const createError = require("http-errors");
const { isValidObjectId } = require("mongoose");
const CommentsModel = require("../../models/commentsModel");

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw createError(400, "id is not valid");
  }
  const product = await CommentsModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!product) {
    throw createError(401, "unable to find id");
  }
  res.status(200).json({ statsu: "ok", data: product });
});

module.exports = update;

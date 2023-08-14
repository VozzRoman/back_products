const asyncHandler = require("express-async-handler");
const createError = require("http-errors");
const { isValidObjectId } = require("mongoose");
const CommentsModel = require("../../models/commentsModel");

const getById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw createError(400, "id is not valid");
  }
  const comment = await CommentsModel.findById(id);
  if (!comment) {
    throw createError(401, "unable to find id");
  }
  console.log("getById");
  res.status(200).json({ statsu: "ok", data: comment });
});

module.exports = getById;

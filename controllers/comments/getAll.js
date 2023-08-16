const CommentsModel = require("../../models/commentsModel");
const asyncHandler = require("express-async-handler");
const createError = require("http-errors");
const { UserModel } = require("../../models/userModels");

const getAll = asyncHandler(async (req, res) => {
  const comments = await CommentsModel.find({});
  if (!comments) {
    throw createError(400, "unable fetch all comments");
  }
  res.status(200).json({ status: "ok", data: comments });
});

module.exports = getAll;

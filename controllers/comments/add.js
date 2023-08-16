const CommentsModel = require("../../models/commentsModel");
const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const add = asyncHandler(async (req, res) => {
  const { _id: owner, name } = req.user;
  const comment = await CommentsModel.create({ ...req.body, owner, name });
  if (!comment) {
    throw createError(400, "unable create comment");
  }
  res.status(201).json({ statsu: "ok", data: comment });
});

module.exports = add;

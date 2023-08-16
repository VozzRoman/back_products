const { UserModel } = require("../../models/userModels");
const asyncHandler = require("express-async-handler");
const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  await UserModel.findByIdAndUpdate(_id, { token: "" });
  res.json({
    message: "logout success",
  });
});

module.exports = logout;

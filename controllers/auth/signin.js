const asyncHandler = require("express-async-handler");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../../models/userModels");
const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //проверяем есть ли такой юзер в базе данных!
  const condidate = await UserModel.findOne({ email });
  if (!condidate) {
    throw createError(401, `Email or password invalid`);
  }
  const passwordCompare = await bcrypt.compare(password, condidate.password);

  if (!passwordCompare) {
    throw createError(401, `Email or password invalid`);
  }
  const payload = {
    id: condidate._id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "23h" });
  res.json({ token });
});

module.exports = signin;

const { UserModel } = require("../../models/userModels");
const asyncHandler = require("express-async-handler");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");

const signup = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //проверяем есть ли такой юзер в базе данных!
  const user = await UserModel.findOne({ email });
  if (user) {
    throw createError(409, `${email} already exists`);
  }
  //перед тем как записать в базу хешируем пароль!
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

  const condidate = await UserModel.create({
    ...req.body,
    password: hashPassword,
  });
  if (!condidate) {
    throw createError(400, "unable create user");
  }

  res.status(201).json({
    code: 201,
    status: "ok",
    data: { name: condidate.name, email: condidate.email },
  });
});

module.exports = signup;

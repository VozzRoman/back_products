const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModels");
const authinticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  console.log(req.headers);
  const [bearer, token] = authorization.split(" ");
  console.log(token);
  console.log(bearer);
  if (bearer !== "Bearer") {
    next(createError(401, "Bearer is not defind"));
  }
  try {
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findById(id);
    //добавляем user из базы в реквесты
    req.user = user;
    if (!user || !user.token || user.token !== token) {
      next(createError(401, "token false"));
    }

    next();
  } catch (error) {
    next(createError(401, "user is not Unauthorized"));
  }
};

module.exports = authinticate;

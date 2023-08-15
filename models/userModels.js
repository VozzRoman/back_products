const { Schema, model } = require("mongoose");
const handleMongooseError = require("../middleWare/mongooseError");

const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const userModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { versionKey: false, timestamps: true }
);

userModel.post("save", handleMongooseError);

const UserModel = model("user", userModel);

module.exports = {
  UserModel,
  emailRegexp,
};

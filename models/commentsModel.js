const { Schema, model } = require("mongoose");

const commentsModel = new Schema(
  {
    body: {
      type: String,
      require: true,
    },
    name: {
      type: String,
    },
    postId: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const CommentsModel = model("comments", commentsModel);

module.exports = CommentsModel;

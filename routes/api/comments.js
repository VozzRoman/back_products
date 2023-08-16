const express = require("express");
const { commentsController } = require("../../controllers");
const { commentSchema } = require("../../schema");
const { validation, authinticate } = require("../../middleWare");
const routes = express.Router();

routes.get("/", commentsController.getAll);
routes.post(
  "/",
  validation(commentSchema),
  authinticate,
  commentsController.add
);
routes.get("/:id", commentsController.getById);
routes.delete("/:id", authinticate, commentsController.remove);
routes.put("/:id", authinticate, commentsController.update);

module.exports = routes;

const express = require("express");
const { commentsController } = require("../../controllers");
const { commentSchema } = require("../../schema");
const { validation } = require("../../middleWare");
const routes = express.Router();

routes.get("/", commentsController.getAll);
routes.post("/", validation(commentSchema), commentsController.add);
routes.get("/:id", commentsController.getById);
routes.delete("/:id", commentsController.remove);
routes.put("/:id", commentsController.update);

module.exports = routes;

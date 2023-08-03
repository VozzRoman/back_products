const express = require("express");
const productsController = require("../../controllers");
const router = express.Router();
const { validation } = require("../../middleWare");
const { productSchema } = require("../../schema");

router.get("/", productsController.getAll);

router.get("/:id", productsController.finById);

router.post("/", validation(productSchema), productsController.addProd);

router.delete("/:id", productsController.deleteProd);

router.put("/:id", validation(productSchema), productsController.updateProd);

module.exports = router;

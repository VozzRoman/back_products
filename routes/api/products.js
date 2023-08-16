const express = require("express");
const { productsController } = require("../../controllers");
const router = express.Router();
const { validation, upload, authinticate } = require("../../middleWare");
const { productSchema } = require("../../schema");

router.get("/", productsController.getAll);

router.get("/:id", productsController.finById);

router.post(
  "/",
  upload.any("images"),
  //   upload.single("thumbnail"),
  validation(productSchema),
  productsController.addProd
);

router.delete("/:id", productsController.deleteProd);

router.put("/:id", validation(productSchema), productsController.updateProd);
// router.patch(
//   "/images",
//   upload.single("images"),
//   productsController.updateImage
// );

module.exports = router;

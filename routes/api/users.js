const express = require("express");
const { userController } = require("../../controllers");
const { authinticate } = require("../../middleWare");

const router = express.Router();

router.get("/cart", authinticate, userController.getUserCart);
router.post("/", authinticate, userController.addProduct);
router.get("/info", authinticate, userController.getUserInfo);

module.exports = router;

const express = require("express");
const { authController } = require("../../controllers");
const { validation, authinticate } = require("../../middleWare");
const { signupSchema, signinSchema } = require("../../schema");
const router = express.Router();

router.post("/signup", validation(signupSchema), authController.signup);
router.post("/signin", validation(signinSchema), authController.signin);
router.get("/current", authinticate, authController.current);
router.post("/logout", authinticate, authController.logout);

module.exports = router;

const express = require("express");
const { authController } = require("../../controllers");
const { validation } = require("../../middleWare");
const { signupSchema, signinSchema } = require("../../schema");
const router = express.Router();

router.post("/signup", validation(signupSchema), authController.signup);
router.post("/signin", validation(signinSchema), authController.signin);

module.exports = router;

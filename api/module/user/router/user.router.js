const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const {
  userSignupSchema,
  userSignInSchema,
} = require("../joi/user.handleValidation");
const router = express.Router();

//create user
const userSignupFun = require("../controller/user.signup");
router.post("/user/signup", handleValidation(userSignupSchema), userSignupFun);
//end

//user sign in
const userSignFun = require("../controller/userSignIn");
router.post("/user/signin", handleValidation(userSignInSchema), userSignFun);
//end

module.exports = router;

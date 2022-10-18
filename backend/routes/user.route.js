const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authValidation = require("../validations/auth.validation")
const validate = require("../middlewares/validate.middleware")


router.post("/login" , validate(authValidation.login), userController.login);
router.post("/register" , validate(authValidation.register), userController.register);


module.exports = router;
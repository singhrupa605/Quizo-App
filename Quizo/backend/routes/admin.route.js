const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller")
const validate = require("../middlewares/validate.middleware")
const quizValidation = require("../validations/quiz.validation")

router.post("/quiz",validate(quizValidation.questionArray), adminController.createQuiz);


module.exports = router;
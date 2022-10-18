const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz.controller")
const quizValidation = require("../validations/quiz.validation")
const validate = require("../middlewares/validate.middleware")
const {auth} = require("../middlewares/auth.middleware")

router.get("/" , auth, quizController.getAllQuizes );
router.get("/:quizId", auth, validate(quizValidation.quizId) , quizController.getQuiz);


module.exports = router
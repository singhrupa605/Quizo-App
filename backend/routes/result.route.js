const express = require("express");
const router = express.Router();
const resultController  = require("../controllers/result.controller")
const validate = require("../middlewares/validate.middleware")
const resultValidation = require("../validations/result.validaton")
const {auth} = require("../middlewares/auth.middleware")


router.post("/", auth, validate(resultValidation.postResult), resultController.postResult)
router.get("/", auth,  resultController.viewResults)
router.get("/result", auth, resultController.getRecentResult )
router.get("/:resultId", auth, validate(resultValidation.resultId), resultController.findResultById )


module.exports = router;

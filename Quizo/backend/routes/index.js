const express = require("express")
const  router = express.Router();
const userRoutes = require("./user.route")
const adminRoutes = require("./admin.route")
const quizRoutes = require("./quiz.route");
const resultRoutes = require("./result.route")


router.use("/users", userRoutes );
router.use("/admin", adminRoutes);
router.use("/quizes" , quizRoutes);
router.use("/results", resultRoutes)


module.exports = router;
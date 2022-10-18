const httpStatus = require("http-status")
const adminService = require("../services/admin.service")
const errorHandler = require("../utils/errorHandler");


const createQuiz = errorHandler(async(req, res)=>
{
    const newQuiz = await adminService.createQuiz(req.body);
    if(!newQuiz)
    {
      res.status(httpStatus.NO_CONTENT).send({ message: "Invalid data" });
    }
    else {
        res.status(httpStatus.CREATED).send(newQuiz);
    }
})





module.exports = { createQuiz };



const quizService = require("../services/quiz.service")
const errorHandler = require("../utils/errorHandler")
const httpStatus = require("http-status");


const getQuiz = errorHandler(async(req, res)=>
{
    const quiz = await quizService.getQuiz(req.params.quizId);

    if(!quiz)
    {
      res.status(httpStatus.NOT_FOUND).send({ message: "Quiz not found" });
    }
    else {
        res.status(httpStatus.OK).send({quiz})
    }

})



const getAllQuizes = errorHandler(async(req, res)=>
{
   const quizes = await quizService.getAllQuizes();
   if(!quizes)
   {
    res.status(httpStatus.NOT_FOUND).send("No Quiz Found");
   }
   else
   {
    res.status(httpStatus.OK).send(quizes)
   }
})

module.exports = {getAllQuizes, getQuiz}

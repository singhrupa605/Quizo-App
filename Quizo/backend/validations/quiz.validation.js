
const Joi = require("joi");
const question = require("./question.validation")
const {mongoId} = require("./custom.validation");


//Joi Validation to check questions array schema coming from admin quiz creating request
const questionArray = Joi.object().keys({
    body:{
        questions:Joi.array().items(Joi.object(question)).required().length(10),
      }
})

//QuizId validation to view any quiz using its mongoId as param
const quizId = Joi.object().keys({
  params:{
    quizId: Joi.string().custom(mongoId)
  }
})
module.exports= { questionArray , quizId}
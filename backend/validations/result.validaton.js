const Joi = require("joi");
const { mongoId } = require("./custom.validation");

//Joi validation of request body to post a quiz result by a user
const postResult = {
  body: Joi.object().keys({
    quizId: Joi.string().required().custom(mongoId),
    scores:Joi.array().items((Joi.number())).required(),
    finalScore:Joi.number().required()
  }),
};
const resultId = Joi.object().keys({
  params:{
    quizId: Joi.string().custom(mongoId)
  }
})
module.exports = { postResult , resultId};

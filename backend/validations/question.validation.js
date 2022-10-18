const Joi = require("joi");

//Joi Schema to be passed in questionsArray coming from an admin request to create quiz
const question = Joi.object().keys({
    body:{
      question:Joi.string().required(),
      options : Joi.array().items(Joi.object({option: Joi.string().required(), status:Joi.boolean()})),
      level: Joi.number().required()
      }
})

module.exports= {question}

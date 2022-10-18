const Joi = require("joi");


//Joi Validation for register and login details
const  register = 
{
  body : Joi.object().keys({
    email : Joi.string().email().required(),
    password: Joi.string().required().min(5),
    username: Joi.string().required().min(5),
  })
}
const  login = 
{
  body : Joi.object().keys({
    email : Joi.string().email().required(),
    password: Joi.string().required().min(5),
  })
}


module.exports = {
    login, register
}



const httpStatus = require("http-status");
const userService = require("../services/user.service")
const errorHandler = require("../utils/errorHandler");
const tokenService = require("../services/token.service")



const register = errorHandler(async (req, res) => {
  const user = await userService.register(req.body);
  if (user) {
    const token= await tokenService.generateToken(user);
    res.status(httpStatus.CREATED).send({
      user,
      token,
    });
  }
  else {
    res.status(httpStatus.BAD_REQUEST).send({ message: "Invalid data" });
  }
})



const login = errorHandler(async (req, res) => {

  const user = await userService.login(req.body);
  if (user) {

    const token = await tokenService.generateToken(user);
    res.status(httpStatus.OK).send({ user, token });
  }
  else {
    res.status(httpStatus.NOT_FOUND).send({ message: "User not found" });
  }
})



module.exports = { register, login };
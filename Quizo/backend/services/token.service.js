const jwt = require("jsonwebtoken");
const config = require("../config/config");


//Generate  auth tokens 
const generateToken = (user) =>
{
  const expirationTime =   Math.floor(Date.now() / 1000) + config.jwt.accessExpirationMinutes * 60;
  const secret = config.jwt.secret;
  const payload = { sub: user._id, type:"access", exp: expirationTime , iat : Date.now()/1000};
  const token = jwt.sign(payload, secret);
  return token;
};


 module.exports = {generateToken};


 
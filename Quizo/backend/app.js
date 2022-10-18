const express = require("express");
const passport = require("passport");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const { jwtStrategy } = require("./config/passport");
const httpStatus = require("http-status");
const routes = require("./routes");
const compression = require("compression");
const ApiError = require("./utils/ApiError");
const {errorHandler} = require("./middlewares/error.middleware")


//Initialize passport for Jwt authentication
app.use(passport.initialize());

//Using jwt strategy
passport.use("jwt" , jwtStrategy);


//helemt to convert http to https server
app.use(helmet());

//Converting all server based data to json
app.use(express.json())


app.use(express.urlencoded({extended:true}))

app.use(compression());

//cors to bypass same origin policy
app.use(cors());

app.options("*", cors());

//Using routes
app.use("/", routes);


app.use((req, res, next )=>
{  
    next(new ApiError(httpStatus.NOT_FOUND, "PAGE NOT FOUND"));
});

app.use(errorHandler);


module.exports = app;


const ApiError = require("../utils/ApiError");
const passport = require("passport");
const httpStatus = require("http-status");


// Authenticating the user and appending the user info to req for data access rights
const authenticateUser = (req, resolve, reject) => async (error, user, info) => {
    if (!user || info || error) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, "Not authorized"));
    }
    req.user = user;
    resolve();
}

//Auth middleware to be used for protecting the routes
const auth = async (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate("jwt", { session: false },
            authenticateUser(req, resolve, reject))(req, res, next);

    }).then(() => next()).catch((err) => next(err));
}

module.exports = { auth };
const User = require("../models/user.model")
const ApiError = require("../utils/ApiError")
const bycrypt = require("bcryptjs");
const httpStatus = require("http-status");


// Register by any user
const register = async (userdata) => {
    const isEmailTaken = await User.isEmailTaken(userdata.email);
    if (isEmailTaken) {
        throw new ApiError(httpStatus.OK, "Email is already taken")
    }
    const salt = await bycrypt.genSalt();
    const hashedPassword = await bycrypt.hash(userdata.password, salt);
    const user = await User.create({ ...userdata, password: hashedPassword });
    return user;

}


//Login by any user
const login = async (userdata) => {

    const user = await User.findOne({ email: userdata.email });
    if (!user) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect Email");
    }
    const isPasswordMatch = await user.isPasswordMatch(userdata.password);
    console.log(isPasswordMatch)
    if (!isPasswordMatch) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect Password");
    }
    return user;
}




module.exports = {
    register, login
}
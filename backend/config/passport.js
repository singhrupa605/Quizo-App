const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("./config")
const User = require("../models/user.model")

//Configuring JWT stragtegy to define the auth middleware
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret

}

//Veryfiy function to validate access rights
const verifyJwt = async (payload, done) => {
    try {
        if (payload.type !== "access") {
            return done(new Error("Invalid Token"), false);
        }
        const user = await User.findById(payload.sub)
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    }
    catch (err) {
        done(err, false);
    }

}

const jwtStrategy = new JwtStrategy(jwtOptions, verifyJwt);
module.exports = {
    jwtStrategy
}
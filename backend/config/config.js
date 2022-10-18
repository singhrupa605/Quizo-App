const path = require("path");
const Joi = require("joi");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });


//Fetching environment variables and creating config object to use throughout the application
const envVars = Joi.object().keys
    (
        {
            PORT: Joi.number().default(3000),
            MONGO_URI: Joi.string().required().description("MongoDB URI"),
            JWT_SECRET_KEY: Joi.string().required().description("JWT Secret Key"),
            JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description("Minutes after which access tokens expire"),

        }
    ).unknown();

const { value: vars, error } = envVars.prefs({ errors: { label: 'key' } }).validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports =
{
    port: vars.PORT,
    mongoose: {
        url: vars.MONGO_URI,
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

    },
    jwt: {
        secret: vars.JWT_SECRET_KEY,
        accessExpirationMinutes: vars.JWT_ACCESS_EXPIRATION_MINUTES,
    }
}
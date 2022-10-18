const Result = require("../models/result.model")
const ApiError = require("../utils/ApiError")
const httpStatus = require("http-status");
const { json, response } = require("express");

//Post Quiz result to the results database
const postResult = async (user, finalScore, scores, quizId) => {
    try {
        const userResult = await Result.findOne({ email: user.email });
        const resultDoc = { quizId: quizId, scores: scores, finalScore: finalScore }
        if (!userResult) {
            const newResult = await Result.create({ email: user.email, allresults: [{ result: resultDoc }] })
            if (!newResult) {
                throw new ApiError(httpStatus.NO_CONTENT, "Result cannot be created");
            }
            return newResult;
        }
        else {
            userResult.allresults.push({ result: resultDoc });
            await userResult.save();
            return userResult;
        }
    }
    catch (err) {
        console.log(err)
    }
}




const getResult = async (user) => {
    try {
        const userResult = await Result.findOne({ email: user.email });
        if (!userResult) {
            throw new ApiError(httpStatus.NOT_FOUND, "No result found for current user");
        }
        const n = userResult.allresults.length;
        const recentResult = userResult.allresults[n - 1].result;
        return recentResult;
    }
    catch (err) {
        console.log(err)
    }

}


const findResultById = async (resultId, user) => {
    try {
        const userResult = await Result.findOne({ email: user.email });
        if (!userResult) {
            throw new ApiError(httpStatus.NOT_FOUND, "No result found for current user");
        }
        const response = userResult.allresults.find((res) => (JSON.stringify(res.result._id) === JSON.stringify(resultId)))
        if (!response) {
            throw new ApiError(httpStatus.NOT_FOUND, "Result of this Id is not found");
        }
        return response.result
    }
    catch (err) {
        console.log(err)
    }
}

//View all quiz results of  a user
const viewResults = async (user) => {
    try {
        const userResult = await Result.findOne({ email: user.email });
        if (!userResult) {
            throw new ApiError(httpStatus.NOT_FOUND, "No result found for current user");
        }
        return userResult;
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { postResult, viewResults, getResult , findResultById}
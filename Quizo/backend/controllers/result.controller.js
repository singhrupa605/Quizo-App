const errorHandler = require("../utils/errorHandler")
const httpStatus = require("http-status");
const resultService = require("../services/result.service");


const viewResults = errorHandler(async (req, res) => {
    const userResults = await resultService.viewResults(req.user)
    if (!userResults) {
        res.status(httpStatus.NOT_FOUND).send({ message: "User have no results to show" });
    }
    else {
        res.status(httpStatus.OK).send(userResults);
    }
})


const findResultById = errorHandler(async(req, res)=>
{ 
    const result = await resultService.findResultById(req.params.resultId, req.user);
    if(!result)
    {
      res.status(httpStatus.NOT_FOUND).send({ message: "Quiz not found" });
    }
    else {
        res.status(httpStatus.OK).send(result)
    }
})

const getRecentResult = errorHandler(async (req, res) => {
    const userResult = await resultService.getResult(req.user)
    if (!userResult) {
        res.status(httpStatus.NOT_FOUND).send({ message: "User have no results to show" });
    }
    else {
        res.status(httpStatus.OK).send(userResult);
    }
})
const postResult = errorHandler(async (req, res) => {
    const { finalScore, scores, quizId } = req.body;
    const data = await resultService.postResult(req.user, finalScore, scores, quizId)
    if (!data) {
        res.status(httpStatus.NO_CONTENT).send({ message: "Result cannot be posted" });
    }
    else {
        res.status(httpStatus.CREATED).send(data);
    }
}
)
module.exports = { viewResults, postResult , getRecentResult, findResultById}
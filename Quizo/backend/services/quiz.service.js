const Quiz = require("../models/quiz.model");

//Fetch all quizes
const getAllQuizes = async () => {
    try {
        const quizes = await Quiz.find({});
        return quizes;
    }
    catch (err) {
        console.log(err);
    }
}

//Fetch quiz by Id
const getQuiz = async(quizId)=>
{
  try{
    const quiz = await Quiz.findById(quizId);
    return  quiz;
  }
  catch(err){
    console.log(err)
  }

}

module.exports = {getQuiz, getAllQuizes}
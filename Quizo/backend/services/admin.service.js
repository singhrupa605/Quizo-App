
const Quiz = require("../models/quiz.model");

//To create quiz by the admin
const createQuiz = async(questionArray)=>
{
  try{
    const newQuiz = new Quiz(questionArray);
    const data = await newQuiz.save();
    return data;
  }
  catch(err){
    console.log(err)
  }

}

module.exports = {createQuiz}





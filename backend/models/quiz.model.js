const mongoose = require("mongoose");
const {questionSchema} = require("./question.model")

const quizSchema = new mongoose.Schema({
    
    questions:[{question : questionSchema}]
}
)
const Quiz = mongoose.model("Quizes", quizSchema);
module.exports = Quiz;

const mongoose = require("mongoose");

const resSchema = mongoose.Schema({
    quizId:{type:String , required:true},
    scores:[{type:Number}],
    finalScore:{type:Number, reuqired:true}
})


const resultSchema  = mongoose.Schema({

    email: { type: String, required: true, trim: true , unique : true},
    allresults : [{result:resSchema}]
});

const Result = mongoose.model("Results", resultSchema);

module.exports = Result;
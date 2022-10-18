const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  title:
  {
    type: String,
    required: true,
  },
  options:
  {
    type: Array,
    required: true,
    validate(arr) {
      if (arr.length !== 4) {
        throw new Error("These must be 4 options in each question")
      }
    }
  },
  level: { required: true, type: Number },
},
  {
    timestamps: false,
  });

module.exports.questionSchema = questionSchema;
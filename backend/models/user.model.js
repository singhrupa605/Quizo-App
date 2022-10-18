const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({

  username: { type: String, unique: true, lowercase: true, required: true,minlength: 5 },
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true, minlength: 5},

})

userSchema.statics.isEmailTaken = async function (email)
{
  const data = await this.findOne({email});
  return !!data;
};

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};


const User = mongoose.model("User", userSchema);
module.exports = User;
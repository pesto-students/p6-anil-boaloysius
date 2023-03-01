const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email!"],
    unique: true,
    lowercase: true, // To convert the emails like BOBY@gmail.com to lowercase (boby@gmail.com),
    validate: [validator.isEmail, "Please provide a valid email."], // To check if the value is a valid email id
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    // This only works on CREATE and SAVE, not on UPDATE!!
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same.",
    },
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

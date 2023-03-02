const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
    select: false, // Do not show it in any output.
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

// Prehook before saving the data to encrypt password.
UserSchema.pre("save", async function (next) {
  // Only run this function if password was modified.
  if (!this.isModified("password")) return next();

  // Hash the password at the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the password confirm field
  this.passwordConfirm = undefined;
  next();
});

UserSchema.methods.validPassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;

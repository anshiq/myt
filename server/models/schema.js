const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide title of Video"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "must provide title of Video"],
    trim: true,
    maxlength: [120, "dscription can not be more than 120 characters"],
  },
});
const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "must provide title of Video"],
  },
});
const TaskSchemas = mongoose.model("taskDetails", TaskSchema);
const LoginSchemas = mongoose.model("loginDetails", LoginSchema);
module.exports = { TaskSchemas, LoginSchemas };

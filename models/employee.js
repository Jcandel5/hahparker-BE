const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
  desc: String,
  date: {
    type: Date,
    default: Date.now
  }
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
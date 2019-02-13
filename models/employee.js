const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  title: String,
  img: String,
  desc: String,
  date: {
    type: Date,
    default: Date.now
  }
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
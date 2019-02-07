const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  img: String,
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
});
const employee = mongoose.model("employee", employeeSchema);
module.exports = employee;
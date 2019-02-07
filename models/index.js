var mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE_URI);

mongoose.Promise = Promise;

module.exports.employee = require("./employee");
// module.exports.Profiles = require("./profiles");
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const employeeRoutes = require("./routes/employees")

//server setup
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log("listening on port" , port)
})
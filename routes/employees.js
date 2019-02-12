const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/employee", (req, res) => {
  db.Employee.find({})
    .then(del => {
      res.json(del);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/api/employee", (req, res) => {
  const name = req.body.name;
  const title = req.body.title;
  const desc = req.body.desc;

  const newEmployee = {
    name,
    title,
    desc
  };

  db.Employee.create(newEmployee, (err, newEmployee) => {
    if (err) {
      console.log("error creating employee", err);
    } else {
      res.render("success", { employee: newEmployee });
    }
  });
});

router.get("/api/employee/:employeeId", (req, res) => {
  db.Employee.findById({ _id: req.params.employeeId })
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/employee/:employeeId", (req, res) => {
  db.Employee.findOneAndUpdate({ _id: req.params.employeeId }, req.body, {
    new: true
  })
    .then(function(video) {
      res.json(video);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/api/employee/:employeeId", (req, res) => {
  db.Employee.remove({ _id: req.params.employeeId })
    .then(function() {
      res.json({ message: "Employee deleted" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
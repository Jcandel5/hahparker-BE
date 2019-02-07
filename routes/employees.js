const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/api/employee', (req, res) =>{
    db.Employee.find({})
    .then(employee => {
        res.json(employee)
    })
    .catch(err =>{
        res.json(err);
    });
})


router.post('./api/employee' , (req, res) => {
    db.Employee.create(req.body)
    .then(employee =>{
        res.json(employee);
    })
    .catch(err => {
        res.send(err);
    });
});

router.put('./api/employeeId' , (req, res) => {
    db.Employee.findOneAndUpdate({_id: req.params.employeeId}, req.body, {
        new: true
    })
    .then(employee =>{
        res.json(employee);
    })
    .catch(err => {
        res.send(err);
    });
});

router.delete('./api/employeeId' , (req, res) => {
    db.Employee.remove({_id: req.params.employeeId})
    .then(function(){
        res.json({message: "Employee Deleted"});
    })
    })
    .then(employee =>{
        res.json(employee);
    })
    .catch(err => {
        res.send(err);
    });



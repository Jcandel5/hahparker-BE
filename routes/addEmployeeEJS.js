const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

router.get("/", (req, res) => {
  res.render("addEmployee");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/error", (req, res) => {
  res.render("error");
});

router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    adminCode: req.body.adminCode
  });
  if (req.body.adminCode === process.env.ADMIN_CODE) {
    newUser.isAdmin = true;
  }
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        return console.log(err);
      }

      passport.authenticate("local")(req, res, () => {
        if (req.body.adminCode === process.env.ADMIN_CODE) {
          res.redirect("/add/employee");
        } else {
          res.redirect("/add/employee/error");
        }
      });
    }
  );
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/add/employee/register");
});

module.exports = router;
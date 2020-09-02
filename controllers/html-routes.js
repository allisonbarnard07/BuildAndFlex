// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var express = require("express");
var db = require("../models");


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// app.set("view engine", "handlebars");
var hbsObject = {email: "", loggedin: false, userName: "", title: "you are not logged"}

module.exports = function(app) {

  app.get("/", function(req, res) {
    // redirect the user to the login page when a user visit the page for the first time.(when our server start listen a request)
      res.redirect("/login");
  });
  // login route
  app.get("/login", function(req, res) {
    res.render("login", hbsObject );
  });
  // signup route
  app.get("/signup", function(req, res){
    res.render("signup", hbsObject);
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/allexercises", isAuthenticated, function(req, res) {
    hbsObject.loggedin = true;
    hbsObject.title = "You are logged"
    res.render("allexercises", hbsObject);
  });
  // // logout route
  // app.get("/logout", (req, res) => {
  //   if(req.user){
  //     hbsObject.loggedin = false;
  //     hbsObject.title = "You are logged out";
  //     res.redirect("/");
  //   }
  //   else{
  //     res.redirect("/login");
  //   }
  // });

};

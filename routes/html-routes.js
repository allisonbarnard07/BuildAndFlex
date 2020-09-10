// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // app.get("/", (req, res) => {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

   
    app.get("/", function(req, res) {
       // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
      res.render("login");
    });


  // app.get("/login", (req, res) => {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
 if (req.user) {
   res.redirect("/members");
 }
   res.render("signup");
 });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  
  app.get("/members", function(req, res) {
    // If the user already has an account send them to the members page
 if (req.user) {
   res.redirect("/members");
 }
   res.render("members");
 });

 app.get("/walking", function(req, res) {
  // If the user already has an account send them to the members page
if (req.user) {
 res.redirect("/members");
}
 res.render("walking");
});

app.get("/swimming", function(req, res) {
  // If the user already has an account send them to the members page
if (req.user) {
 res.redirect("/members");
}
 res.render("swimming");
});

app.get("/hiking", function(req, res) {
  // If the user already has an account send them to the members page
if (req.user) {
 res.redirect("/members");
}
 res.render("hiking");
});

app.get("/pullup", function(req, res) {
  // If the user already has an account send them to the members page
if (req.user) {
 res.redirect("/members");
}
 res.render("pullup");
});

app.get("/running", function(req, res) {
  // If the user already has an account send them to the members page
if (req.user) {
 res.redirect("/members");
}
 res.render("running");
});


















  app.get("/stats", (req, res) => {    
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  app.get("/results", (req, res) => {    
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });
  
};
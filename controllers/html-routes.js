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

  app.get("/", (req, res) => {
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

  app.get("/signup", (req, res) => {
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

<<<<<<< HEAD
  app.get("/members", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
=======
  app.get("/profile", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.render("profile");
  });

  app.get("/members", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
>>>>>>> 2fa830acb5aedf3446f15917abfae24d09831de0
      res.redirect("/members");
    }
    res.render("members");
  });
<<<<<<< HEAD

  app.get("/walking", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("walking");
  });

  app.get("/profile", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("profile");
=======

  app.get("/walking", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("walking");
  });

  app.get("/swimming", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("swimming");
  });

  app.get("/hiking", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("hiking");
  });

  app.get("/pullup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("pullup");
  });

  app.get("/running", (req, res) => {
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
>>>>>>> 2fa830acb5aedf3446f15917abfae24d09831de0
  });
};

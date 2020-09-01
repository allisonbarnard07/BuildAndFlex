// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var swimChallenge = sequelize.define("swimChallenge", {
    goal: Sequelize.STRING,
    weightLoss: Sequelize.INTEGER,
    duration: Sequelize.INTEGER,
    miles: Sequelize.INTEGER
  });  

  swimChallenge.sync();
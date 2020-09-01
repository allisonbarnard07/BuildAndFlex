// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var runChallenge = sequelize.define("runChallenge", {
    goal: Sequelize.STRING,
    weightLoss: Sequelize.INTEGER,
    duration: Sequelize.INTEGER,
    miles: Sequelize.INTEGER
  });  

  runChallenge.sync();
// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var pullupChallenge = sequelize.define("pullupChallenge", {
    goal: Sequelize.STRING,
    weightLoss: Sequelize.INTEGER,
    duration: Sequelize.INTEGER,
    reps: Sequelize.INTEGER
  });  

  pullupChallenge.sync();
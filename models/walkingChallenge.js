module.exports = function(sequelize, DataTypes){
    var WalkingChallenge = sequelize.define("walkingChallenge", {
        goal: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },
        weightLoss: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },        
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        miles: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        steps: {
            type: DataTypes.INTEGER
        }
    });
    WalkingChallenge.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        WalkingChallenge.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return WalkingChallenge;        
}

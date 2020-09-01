module.exports = function(sequelize, DataTypes){
    var walkingChallenge = sequelize.define("walkingChallenge", {
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

    return walkingChallenge;        
}


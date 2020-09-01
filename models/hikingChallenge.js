module.exports = function(sequelize, DataTypes){
    var hikingChallenge = sequelize.define("hikingChallenge", {
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
        }
    });

    return hikingChallenge;        
}


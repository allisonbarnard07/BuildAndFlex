module.exports = function(sequelize, DataTypes){
    var swimChallenge = sequelize.define("swimChallenge", {
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
    });
    return swimChallenge;        
}
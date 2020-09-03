module.exports = function(sequelize, DataTypes){
    var pullupChallenge = sequelize.define("pullupChallenge", {
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
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return pullupChallenge;        
}
const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    photo_url: {
        type: DataTypes.STRING
    },
    recommended_calories: {
        type: DataTypes.INTEGER,
        defaultValue: 2000
    }
});

module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Counttry = sequelize.define('countries', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  languaje: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  flagUrl: {
    type: DataTypes.TEXT
  },
});

module.exports = Counttry;
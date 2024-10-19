const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database'); // PostgreSQL connection file

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8] // Password must be at least 8 characters
    }
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: true // Automatically handle createdAt and updatedAt fields
});

module.exports = User;

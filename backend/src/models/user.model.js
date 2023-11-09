const { DataTypes } = require("sequelize");
const sequelize = require("../util/dbConnection");

const UserModel = sequelize.define("user", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
  },
  password: {
    type: DataTypes.TEXT,
  },
});

module.exports = UserModel;

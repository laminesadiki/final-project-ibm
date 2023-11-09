const sequelize = require("../util/dbConnection");
const { DataTypes } = require("sequelize");

const ProductModel = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
});


module.exports = ProductModel;

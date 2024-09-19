"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // Define the one-to-many relationship
      Employee.hasMany(models.Device, {
        foreignKey: "employeeId",
        as: "devices",
      });
    }
  }

  Employee.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Employee",
      timestamps: true,
      paranoid: false,
    }
  );

  return Employee;
};

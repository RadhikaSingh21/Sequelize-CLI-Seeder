"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate(models) {
      // Define the inverse relationship
      Device.belongsTo(models.Employee, {
        foreignKey: "employeeId",
        as: "employee",
      });
    }
  }

  Device.init(
    {
      deviceName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deviceType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Device",
      timestamps: true,
      paranoid: false,
    }
  );

  return Device;
};

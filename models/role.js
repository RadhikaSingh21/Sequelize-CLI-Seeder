"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Role",
      timestamps: true, // Sequelize will automatically handle createdAt and updatedAt
      paranoid: false,
    }
  );

  Role.associate = (models) => {
    Role.hasOne(models.User, {
      foreignKey: "roleId",
      as: "user",
    });
  };

  return Role;
};

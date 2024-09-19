"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Devices", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Employees", // Adjust if the table name is different
          key: "id",
        },
        allowNull: false,
      },
      deviceName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deviceType: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, // Set default value
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, // Set default value
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Devices");
  },
};

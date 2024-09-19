"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch employee IDs from the database
    const employees = await queryInterface.sequelize.query(
      "SELECT id FROM Employees",
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    // Prepare device data
    const devices = [];
    for (let i = 0; i < 10; i++) {
      devices.push({
        employeeId: employees[Math.floor(Math.random() * employees.length)].id,
        deviceName: faker.commerce.productName(),
        deviceType: faker.commerce.productMaterial(),
        createdAt: new Date(), // Add createdAt
        updatedAt: new Date(), // Add updatedAt
      });
    }

    // Insert device data into the database
    await queryInterface.bulkInsert("Devices", devices, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Devices", null, {});
  },
};

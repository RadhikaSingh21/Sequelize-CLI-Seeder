"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = [];
    for (let i = 0; i < 5; i++) {
      employees.push({
        name: faker.person.fullName(),
        position: faker.person.jobTitle(),
        createdAt: new Date(), // Include createdAt
        updatedAt: new Date(), // Include updatedAt
      });
    }
    await queryInterface.bulkInsert("Employees", employees, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};

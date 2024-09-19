"use strict";
const { faker } = require("@faker-js/faker");
const { Customer } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customers = [];
    for (let i = 0; i < 10; i++) {
      // Generating 10 fake customers
      customers.push({
        name: faker.person.fullName(), // Generates a random full name
      });
    }
    await Customer.bulkCreate(customers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};

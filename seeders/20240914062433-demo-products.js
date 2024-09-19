"use strict";
const { faker } = require("@faker-js/faker");
const { Product } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [];
    for (let i = 0; i < 10; i++) {
      // Generating 10 fake products
      products.push({
        name: faker.commerce.productName(), // Generates a random product name
      });
    }
    await Product.bulkCreate(products);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};

//bulkinsert does not handle createdAt and UpdatesAt function automatically

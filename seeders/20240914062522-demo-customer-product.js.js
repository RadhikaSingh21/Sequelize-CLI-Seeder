"use strict";
const { faker } = require("@faker-js/faker");
const { Customer, Product } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Fetch customers and products from the database
      const customers = await Customer.findAll();
      const products = await Product.findAll();

      if (customers.length === 0 || products.length === 0) {
        throw new Error(
          "No customers or products found. Ensure that customers and products have been seeded before seeding customer-products."
        );
      }

      const customerProducts = [];
      const uniqueEntries = new Set();

      // Create associations between customers and products
      for (let i = 0; i < 20; i++) {
        const randomCustomer =
          customers[Math.floor(Math.random() * customers.length)].id;
        const randomProduct =
          products[Math.floor(Math.random() * products.length)].id;

        const key = `${randomCustomer}-${randomProduct}`;
        if (!uniqueEntries.has(key)) {
          uniqueEntries.add(key);
          customerProducts.push({
            customerId: randomCustomer,
            productId: randomProduct,
            createdAt: new Date(), // Include createdAt
            updatedAt: new Date(), // Include updatedAt
          });
        }
      }

      console.log("Inserting the following data into CustomerProducts:");

      // Insert data into CustomerProducts table
      await queryInterface.bulkInsert("CustomerProducts", customerProducts, {});
    } catch (error) {
      console.error("Error seeding CustomerProducts:", error);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete("CustomerProducts", null, {});
    } catch (error) {
      console.error("Error deleting CustomerProducts:", error);
      throw error;
    }
  },
};

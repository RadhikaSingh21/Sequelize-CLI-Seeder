const { Customer, Product } = require("../models");

const createCustomerWithProducts = async (req, res) => {
  const { name, productIds } = req.body;

  try {
    const customer = await Customer.create({ name });

    const products = await Product.findAll({
      where: {
        id: productIds,
      },
    });

    if (products.length !== productIds.length) {
      return res.status(404).json({
        error: "Some products not found",
      });
    }
    await customer.addProducts(products);

    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({
      error: "Failed to create customer with products",
      details: error.message,
    });
  }
};

const getAllCustomersWithProducts = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      include: [
        { model: Product, as: "products", through: { attributes: [] } },
      ],
    });
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve customers with products",
      details: error.message,
    });
  }
};

const getAllProductsWithCustomers = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Customer, as: "customers", through: { attributes: [] } },
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve products with customers",
      details: error.message,
    });
  }
};

module.exports = {
  getAllCustomersWithProducts,
  getAllProductsWithCustomers,
  createCustomerWithProducts,
};

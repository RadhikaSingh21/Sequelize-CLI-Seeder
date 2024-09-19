const express = require("express");
const {
  getAllCustomersWithProducts,
  getAllProductsWithCustomers,
  createCustomerWithProducts,
} = require("../controller/many-to-manyController");
const router = express.Router();

router.get("/customers-with-products", getAllCustomersWithProducts);
router.get("/products-with-customers", getAllProductsWithCustomers);
router.post("/create-customer-with-products", createCustomerWithProducts);

module.exports = router;

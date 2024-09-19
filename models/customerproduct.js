"use strict";
module.exports = (sequelize, DataTypes) => {
  const CustomerProduct = sequelize.define(
    "CustomerProduct",
    {},
    {
      tableName: "CustomerProducts",
      timestamps: true,
    }
  );

  CustomerProduct.associate = function (models) {
    // Define associations here if needed
    CustomerProduct.belongsTo(models.Customer, { foreignKey: "customerId" });
    CustomerProduct.belongsTo(models.Product, { foreignKey: "productId" });
  };

  return CustomerProduct;
};

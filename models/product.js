module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
      timestamps: true,
    }
  );
  Product.associate = (models) => {
    Product.belongsToMany(models.Customer, {
      through: "CustomerProduct",
      as: "customers",
      foreignKey: "productId",
    });
  };
  return Product;
};

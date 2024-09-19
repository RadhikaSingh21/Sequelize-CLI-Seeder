module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Customer",
      timestamps: true,
    }
  );
  Customer.associate = (models) => {
    Customer.belongsToMany(models.Product, {
      through: "CustomerProduct",
      as: "products",
      foreignKey: "customerId",
    });
  };
  return Customer;
};

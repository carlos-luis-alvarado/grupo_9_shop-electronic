module.exports = (sequelize, DataType) => {
  let alias = "Brand";

  let cols = {
      id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nombre: {
          type: DataType.STRING,
          allowNull: false
      }
  };

  let config = {
      tableName: "brands",
      timestamps: false
  };

  const Brand = sequelize.define(alias, cols, config);

  return Brand;
};
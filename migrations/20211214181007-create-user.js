"use strict";
const tableName = "users";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image_url: {
        type: DataTypes.STRING,
      },
      provider: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["google", "apple"],
      },
      uid: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      last_login: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName);
  },
};

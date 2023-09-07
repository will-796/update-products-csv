"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('packs_products', {
      pack_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'packs',
          key: 'pack_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'products',
          key: 'code',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('packs_products');
  },
};

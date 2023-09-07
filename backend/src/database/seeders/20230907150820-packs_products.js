'use strict';

// INSERT INTO products VALUES (1000,'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES',48.54,53.94);
// INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78);
// INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'packs_products',
      [
        {
          pack_id: 1000,
          product_id: 18,
          qty: 6,
        },
        {
          pack_id: 1010,
          product_id: 24,
          qty: 1,
        },
        {
          pack_id: 1010,
          product_id: 26,
          qty: 1,
        },
        {
          pack_id: 1020,
          product_id: 19,
          qty: 3,
        },
        {
          pack_id: 1020,
          product_id: 21,
          qty: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('packs_products', null, {});
  },
};
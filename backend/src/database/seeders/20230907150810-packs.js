'use strict';

// INSERT INTO products VALUES (1000,'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES',48.54,53.94);
// INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78);
// INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('packs', [
      {
        pack_id: 1000,
        name: 'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES',
      },
      {
        pack_id: 1010,
        name: 'KIT ROLO DE ALUMINIO + FILME PVC WYDA',
      },
      {
        pack_id: 1020,
        name: 'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('packs', null, {})
  }
};

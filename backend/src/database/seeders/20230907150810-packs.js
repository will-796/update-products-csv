'use strict';

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

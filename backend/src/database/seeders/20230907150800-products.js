'use strict';

// INSERT INTO products VALUES (16,'AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML',18.44,20.49);
// INSERT INTO products VALUES (18,'BEBIDA ENERGÉTICA VIBE 2L',8.09,8.99);
// INSERT INTO products VALUES (19,'ENERGÉTICO  RED BULL ENERGY DRINK 250ML',6.56,7.29);
// INSERT INTO products VALUES (20,'ENERGÉTICO RED BULL ENERGY DRINK 355ML',9.71,10.79);
// INSERT INTO products VALUES (21,'BEBIDA ENERGÉTICA RED BULL RED EDITION 250ML',10.71,11.71);
// INSERT INTO products VALUES (22,'ENERGÉTICO  RED BULL ENERGY DRINK SEM AÇÚCAR 250ML',6.74,7.49);
// INSERT INTO products VALUES (23,'ÁGUA MINERAL BONAFONT SEM GÁS 1,5L',2.15,2.39);
// INSERT INTO products VALUES (24,'FILME DE PVC WYDA 28CMX15M',3.59,3.99);
// INSERT INTO products VALUES (26,'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M',5.21,5.79);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        code: 16,
        name: 'AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML',
        cost_price: 18.44,
        sales_price: 20.49,
      },
      {
        code: 18,
        name: 'BEBIDA ENERGÉTICA VIBE 2L',
        cost_price: 8.09,
        sales_price: 8.99,
      },
      {
        code: 19,
        name: 'ENERGÉTICO  RED BULL ENERGY DRINK 250ML',
        cost_price: 6.56,
        sales_price: 7.29,
      },
      {
        code: 20,
        name: 'ENERGÉTICO RED BULL ENERGY DRINK 355ML',
        cost_price: 9.71,
        sales_price: 10.79,
      },
      {
        code: 21,
        name: 'BEBIDA ENERGÉTICA RED BULL RED EDITION 250ML',
        cost_price: 10.71,
        sales_price: 11.71,
      },
      {
        code: 22,
        name: 'ENERGÉTICO  RED BULL ENERGY DRINK SEM AÇÚCAR 250ML',
        cost_price: 6.74,
        sales_price: 7.49,
      },
      {
        code: 23,
        name: 'ÁGUA MINERAL BONAFONT SEM GÁS 1,5L',
        cost_price: 2.15,
        sales_price: 2.39,
      },
      {
        code: 24,
        name: 'FILME DE PVC WYDA 28CMX15M',
        cost_price: 3.59,
        sales_price: 3.99,
      },
      {
        code: 26,
        name: 'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M',
        cost_price: 5.21,
        sales_price: 5.79,
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Inventories',
    [
      {
        model: 'model1',
        description: 'description1',
        QR: 'QR1',
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'model2',
        description: 'description2',
        QR: 'QR2',
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'model3',
        description: 'description3',
        QR: 'QR3',
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'model4',
        description: 'description4',
        QR: 'QR4',
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Inventories', null, {}),
};

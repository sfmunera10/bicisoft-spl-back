'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Bikeways',
    [
      {
        name: 'name1',
        estimatedTime: 123123,
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name2',
        estimatedTime: 123123,
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name3',
        estimatedTime: 123123,
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name4',
        estimatedTime: 123123,
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Bikeways', null, {}),
};

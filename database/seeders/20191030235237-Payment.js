'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Payments',
    [
      {
        travelTime: 123123123,
        amount: 1.23,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        travelTime: 123123123,
        amount: 1.23,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        travelTime: 123123123,
        amount: 1.23,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        travelTime: 123123123,
        amount: 1.23,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Payments', null, {}),
};

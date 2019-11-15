'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Travels',
    [
      {
        startDate: new Date(),
        finishDate: new Date(),
        duration: 123123,
        bikewayId:1,
        geomapId:1,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: new Date(),
        finishDate: new Date(),
        duration: 123123,
        bikewayId:2,
        geomapId:2,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: new Date(),
        finishDate: new Date(),
        duration: 123123,
        bikewayId:1,
        geomapId:1,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: new Date(),
        finishDate: new Date(),
        duration: 123123,
        bikewayId:2,
        geomapId:2,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Travels', null, {}),
};

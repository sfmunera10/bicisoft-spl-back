'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Shops',
    [
      {
        name: 'name1',
        type: 'type',
        phoneNumber: 123,
        geomapId:1,
        locationId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name2',
        type: 'type',
        phoneNumber: 123,
        geomapId:2,
        locationId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name3',
        type: 'type',
        phoneNumber: 123,
        geomapId:1,
        locationId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name4',
        type: 'type',
        phoneNumber: 123,
        geomapId:2,
        locationId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Shops', null, {}),
};

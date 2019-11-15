'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Locations',
    [
      {
        lat: 4.8,
        lon: 7.1,
        address: 'address1',
        geomapId:1,
        shopId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lat: 4.8,
        lon: 7.1,
        address: 'address2',
        geomapId:2,
        shopId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lat: 4.8,
        lon: 7.1,
        address: 'address3',
        geomapId:1,
        shopId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lat: 4.8,
        lon: 7.1,
        address: 'address4',
        geomapId:2,
        shopId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Locations', null, {}),
};

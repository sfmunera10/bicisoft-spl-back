'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'GeoMaps',
    [
      {
        cityName: 'cityName1',
        type: 'type',
        travelId:1,
        locationId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityName: 'cityName2',
        type: 'type',
        travelId:2,
        locationId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityName: 'cityName3',
        type: 'type',
        travelId:1,
        locationId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityName: 'cityName4',
        type: 'type',
        travelId:2,
        locationId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('GeoMaps', null, {}),
};

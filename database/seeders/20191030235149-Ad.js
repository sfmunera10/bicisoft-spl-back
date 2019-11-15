'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Ads',
    [
      {
        bikewayContent: 'bikewayContent1',
        name: 'name1',
        link: 'link1',
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bikewayContent: 'bikewayContent2',
        name: 'name2',
        link: 'link2',
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bikewayContent: 'bikewayContent3',
        name: 'name3',
        link: 'link3',
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bikewayContent: 'bikewayContent4',
        name: 'name4',
        link: 'link4',
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Ads', null, {}),
};

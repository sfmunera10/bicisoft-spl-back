'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Reviews',
    [
      {
        comment: 'comment1',
        score: 123,
        shopId:1,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'comment2',
        score: 123,
        shopId:2,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'comment3',
        score: 123,
        shopId:1,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'comment4',
        score: 123,
        shopId:2,
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Reviews', null, {}),
};

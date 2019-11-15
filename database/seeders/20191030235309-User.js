'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'name1',
        lastName: 'lastName1',
        citizenId: 123,
        citizenIdType: '',
        age: 33,
        cellphoneNumber: 123,
        role: 'role',
        company: 'company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name2',
        lastName: 'lastName2',
        citizenId: 123,
        citizenIdType: '',
        age: 33,
        cellphoneNumber: 123,
        role: 'role',
        company: 'company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name3',
        lastName: 'lastName3',
        citizenId: 123,
        citizenIdType: '',
        age: 33,
        cellphoneNumber: 123,
        role: 'role',
        company: 'company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'name4',
        lastName: 'lastName4',
        citizenId: 123,
        citizenIdType: '',
        age: 33,
        cellphoneNumber: 123,
        role: 'role',
        company: 'company',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

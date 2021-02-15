'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 'admin',
        password: '1234',
        name: '운영자',
        email: 'admin@crudBoard.com',
        createdAt: '2021-02-14 22:12:30',
        updatedAt: '2021-02-14 22:12:31'
      },
      {
        id: 'user1',
        password: '1234',
        name: '사용자1',
        email: 'user1@crudBoard.com',
        createdAt: '2021-02-14 22:12:30',
        updatedAt: '2021-02-14 22:12:31'
      },{
        id: 'user2',
        password: '1234',
        name: '사용자2',
        email: 'user2@crudBoard.com',
        createdAt: '2021-02-14 22:12:30',
        updatedAt: '2021-02-14 22:12:31'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

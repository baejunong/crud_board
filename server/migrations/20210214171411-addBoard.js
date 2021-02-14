'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        title: '운영자글1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1,
        createdAt: '2021-02-14 22:12:40',
        updatedAt: '2021-02-14 22:12:41'
      },
      {
        title: '운영자글2',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        user_id: 1,
        createdAt: '2021-02-14 22:12:40',
        updatedAt: '2021-02-14 22:12:41'
      },
      {
        title: '운영자글3',
        content: 'Dignissim diam quis enim lobortis scelerisque fermentum dui.',
        user_id: 1,
        createdAt: '2021-02-14 22:12:40',
        updatedAt: '2021-02-14 22:12:41'
      },
      {
        title: '사용자1글1',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        user_id: 2,
        createdAt: '2021-02-14 22:12:40',
        updatedAt: '2021-02-14 22:12:41'
      },
      {
        title: '사용자1글2',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 2,
        createdAt: '2021-02-14 22:12:40',
        updatedAt: '2021-02-14 22:12:41'
      },
      {
        title: '사용자2글1',
        content: 'Massa sapien faucibus et molestie ac feugiat sed lectus. Eget nullam non nisi est sit amet facilisis magna etiam.',
        user_id: 3,
        createdAt: '2021-02-14 22:12:40',
        updatedAt: '2021-02-14 22:12:41'
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

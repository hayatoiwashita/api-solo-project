'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('todos', [{
      user_id: 123,
      title: "task",
      content: "make todo API",
      status: "PROGRESS",
      created: "2020-11-13T06:21:04.876Z",
      updated: "2020-11-13T06:21:04.876Z",
      createdAt: "2020-11-13T06:21:04.876Z",
      updatedAt: "2020-11-13T07:17:35.584Z",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {});
  }
};

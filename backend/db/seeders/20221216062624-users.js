'use strict';

users = [
  {
    firstName: 'Brian',
    lastName: 'Khoo',
    email: 'khoo.brian123@gmail.com',
    username: 'bkhoo123'
  },
  {
    firstName: 'Jerome',
    lastName: 'Powell',
    email: 'jpowell321@gmail.com',
    username: 'moneyprinter999'
  },
  {
    firstName: 'Leon',
    lastName: 'Liu',
    email: '415.liu.leon@outlook.com',
    username: 'thugface123'
  },
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', users)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {
      firstName: ['Jerome', 'Brian', 'Leon']
    })
  }
};

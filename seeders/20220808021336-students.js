'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('students', [
      {
        name: 'Paula Souza',
        email: 'paula.souza@example.com',
        cpf: '60948610000',
        ra: 101235,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'João Silva',
        email: 'joao.silva@example.com',
        cpf: '67699537068',
        ra: 111687,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marina Miranda',
        email: 'marina.miranda@example.com',
        cpf: '89295643054',
        ra: 111365,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maurício Souza',
        email: 'mauricio.souza@example.com',
        cpf: '93252499010',
        ra: 101299,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('students', null, {});
  }
};

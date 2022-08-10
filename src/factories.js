const faker = require('faker-br');
const { factory } = require('factory-girl');
const studentsModel = require('./models/students.model');

factory.define('Student', studentsModel, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    cpf: faker.br.cpf(),
    ra: faker.random.number(),
});

module.exports = factory;
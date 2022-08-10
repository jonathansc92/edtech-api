const Sequelize = require('sequelize');
const database = require('../../config/db');

const studentsModel = database.define('students', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
       type: Sequelize.STRING(150),
       allowNull: false,
    },
    email: {
       type: Sequelize.STRING(150),
       allowNull: false,
       unique: true
    },
    cpf: {
       type: Sequelize.STRING(11),
       allowNull: false,
       unique: true
    },
    ra: {
       type: Sequelize.STRING(20),
       allowNull: false,
       unique: true
    }
});

module.exports = studentsModel;
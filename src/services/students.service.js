const studentsModel = require('../models/students.model');
const logger = require('../../logger');

module.exports = {
    async getAll(req, res) {
        try {
            const students = await studentsModel.findAll();
            return res.status(200).json(students);
        } catch (error) {
            logger.error(error);
            return res.status(500).json('Erro interno contate o administrador do sistema.');
        }
    },

    async find(req, res) {
        try {
            const student = await studentsModel.findByPk(req.params.id);

            if (!student) { 
                logger.error(`Estudante com id ${req.params.id} não encontrado.`);
                return await res.status(404).json({ error: 'Estudante não encontrado.'});
            }
            
            return res.status(200).json(student);
        } catch (error) {
            logger.error(error);
            return res.status(500).json('Erro interno contate o administrador do sistema.');
        }
    },

    async create(req, res){

        const {name, email, cpf, ra} = req.body;

        try {
            const student = await studentsModel.create({name, email, cpf, ra});
            return res.status(201).json(student);
        } catch (error) {
            logger.error(error);
            return res.status(500).json('Erro interno contate o administrador do sistema.');
        }
    },

    async update(req, res){
        const {name, email, cpf, ra} = req.body;
        const id = req.params.id;
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op

        try {
            await studentsModel.update({name, email, cpf, ra}, {where: {id: {[Op.eq]: id }}});
            return res.status(200).json({msg: `Estudante ${name} atualizado com sucesso!`});
        } catch (error) {
            logger.error(error);
            return res.status(500).json('Erro interno contate o administrador do sistema.');
        }
    },

    async delete(req, res){
        try {
            const student = await studentsModel.destroy({where: {id: req.params.id }});

            if (!student) {
                logger.error(`Estudante com id ${req.params.id} não encontrado.`);
                return await res.status(404).json({ error: 'Estudante não encontrado.'});
            }

            return res.status(200).json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (error) {
            logger.error(error);
            return res.status(500).json('Erro interno contate o administrador do sistema.');
        }
    },
}
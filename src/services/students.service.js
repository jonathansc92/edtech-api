const studentsModel = require('../models/students.model');
const logger = require('../../logger');
const cpfValidator = require('node-cpf');
const pagination = require('../helpers/pagination');

module.exports = {
    async getAll(req, res) {
        const { page, size } = req.query;
        const { limit, offset } = pagination.getPagination(page, size);

        await studentsModel.findAndCountAll({limit, offset})
            .then(data => {
                const response = pagination.getPagingData(data, page, limit);
                return res.status(200).json(response)
            }).catch(error => {
                logger.error(error);
                return res.status(500).json({
                    message: error || 'Erro interno contate o administrador do sistema.'
                });
            });
    },

    async find(req, res) {
        await studentsModel.findByPk(req.params.id)
            .then(data => {
                if (!data) {
                    logger.error(`Estudante com id ${req.params.id} não encontrado.`);
                    return res.status(404).json({ error: 'Estudante não encontrado.'});
                }

                return res.status(200).json(data)
            }).catch(error => {
                logger.error(error);
                return res.status(500).json({
                    message: error || 'Erro interno contate o administrador do sistema.'
                });
            });
    },

    async create(req, res){

        req.body.cpf = cpfValidator.unMask(req.body.cpf);

        const {name, email, cpf, ra} = req.body;

        await studentsModel.create({name, email, cpf, ra})
            .then(data => {
                if (!data) {
                    logger.error(`Estudante com id ${req.params.id} não encontrado.`);
                    return res.status(404).json({ error: 'Estudante não encontrado.'});
                }

                return res.status(201).json(data)
            }).catch(error => {
                logger.error(error);
                return res.status(500).json({
                    message: error || 'Erro interno contate o administrador do sistema.'
                });
            });
    },

    async update(req, res){
        req.body.cpf = cpfValidator.unMask(req.body.cpf);

        const {name, email, cpf, ra} = req.body;
        const id = req.params.id;
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op

        await studentsModel.update({name, email, cpf, ra}, {where: {id: {[Op.eq]: id }}})
            .then(data => {
                return res.status(200).json({message: `Estudante ${name} atualizado com sucesso!`});
            }).catch(error => {
                logger.error(error);
                return res.status(500).json({
                    message: error || 'Erro interno contate o administrador do sistema.'
                });
            });
    },

    async delete(req, res){
        await studentsModel.destroy({where: {id: req.params.id }})
            .then(data => {
                if (!data) {
                    logger.error(`Estudante com id ${req.params.id} não encontrado.`);
                    return res.status(404).json({ error: 'Estudante não encontrado.'});
                }
            
                return res.status(200).json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
            }).catch(error => {
                logger.error(error);
                return res.status(500).json({
                    message: error || 'Erro interno contate o administrador do sistema.'
                });
            });
    },
}
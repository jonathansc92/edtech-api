const studentsService = require("../services/students.service");

module.exports = {
    async getAll(req, res) {
        return await studentsService.getAll(req, res);
    },

    async find(req, res) {
        return await studentsService.find(req, res);
    },

    async create(req, res) {
        return await studentsService.create(req, res);
    },

    async update(req, res) {
        return await studentsService.update(req, res);
    },

    async delete(req, res) {
        return await studentsService.delete(req, res);
    },
}
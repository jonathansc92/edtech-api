const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students.controller');
const studentsValidation = require("../validations/students.validation");

router.get('/students', async function (req, res) {
    return await studentsController.getAll(req, res);
});

router.get('/students/:id', async function (req, res) {
    return await studentsController.find(req, res);
});

router.post('/students', studentsValidation.create, async function (req, res) {
    return await studentsController.create(req, res);
});

router.put('/students/:id', studentsValidation.update, async function (req, res) {
    return await studentsController.update(req, res);
});

router.delete('/students/:id', async function (req, res) {
    return await studentsController.delete(req, res);
});

module.exports = router;
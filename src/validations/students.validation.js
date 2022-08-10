const {check, validationResult} = require('express-validator');
const studentsModel = require('../models/students.model');
const cpfValidator = require('node-cpf');

const create = () => [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('O campo nome não pode ser vazio!')
    .bail()
    .isLength({min: 3})
    .withMessage('Por favor, preencha com ao menos 3 carateres!')
    .bail(),
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Endereço de email inválido!')
    .bail()
    .custom((value, {req}) => {
        return studentsModel.findOne({ where: {email: value}, _id:{ $ne: req.params.id } })
           .then(student => {
                if (student) {
                    return Promise.reject('O Email informado já está cadastrado!')
                }    
            })
     }),
  check('cpf')
    .trim()
    .not()
    .isEmpty()
    .withMessage('O campo CPF não pode ser vazio!')
    .bail()
    .isLength({min: 11})
    .withMessage('Por favor, preencha o CPF com 11 caracteres!')
    .bail()
    .custom((value, {req}) => {
        return studentsModel.findOne({ where: {cpf: value}, _id:{ $ne: req.params.id } })
           .then(student => {
                if (student) {
                    return Promise.reject('O CPF informado já está cadastrado!')
                }    
            })
     })
    .custom(cpf => {
        const cpfValidate = cpfValidator.validate(cpf);

        if (!cpfValidate) {
            return Promise.reject('O cpf preenchido não é válido!');
        }

        return true;
     }),
  check('ra')
    .trim()
    .not()
    .isEmpty()
    .bail()
    .custom((value, {req}) => {
      return studentsModel.findOne({ where: {ra: value}, _id:{ $ne: req.params.id } })
         .then(student => {
              if (student) {
                  return Promise.reject('O Registro Acadêmico informado já está cadastrado!')
              }    
          })
   }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];

const update = () => [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('O campo nome não pode ser vazio!')
    .bail()
    .isLength({min: 3})
    .withMessage('Por favor, preencha com ao menos 3 carateres!')
    .bail(),
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Endereço de email inválido!')
    .bail()
    .custom((value, {req}) => {
        return studentsModel.findOne({ where: {email: value}, _id:{ $ne: req.params.id } })
           .then(student => {
                if (student) {
                    return Promise.reject('O Email informado já está cadastrado!')
                }    
            })
     })
];

const reporter = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        
        return res.status(400).json({
            errors: errorMessages
        });
    }
    
    next();
}

module.exports = {
    create: [
        create(),
        reporter
    ],
    update: [
        update(),
        reporter
    ],
};
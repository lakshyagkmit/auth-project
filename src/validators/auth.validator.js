const Joi = require('joi');
const { validateRequest } = require('../helpers/validate.helper');


const registerValidateSchema = async(req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required().label('Email'),
    password: Joi.string().required().label('Password'),
  });
  validateRequest(req, res, next, schema, 'body');
}


const loginValidateSchema = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().lowercase().required().label('Email'),
    password: Joi.string().required().label('Password'),
  });
  validateRequest(req, res, next, schema, 'body');
};


module.exports = {
  registerValidateSchema,
  loginValidateSchema
}
const Joi = require('joi');

const addProductSchema = Joi.object({
  name: Joi.string(),
});

module.exports = {
  addProductSchema,
};
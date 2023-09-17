const Joi = require('joi');

const addProductSchema = Joi.object({
  name: Joi.string().length(5),
});

module.exports = {
  addProductSchema,
};
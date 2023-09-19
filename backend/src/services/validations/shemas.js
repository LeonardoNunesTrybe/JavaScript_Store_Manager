const Joi = require('joi');

const addProductSchema = Joi.object({
  name: Joi.string(),
});

const addSaleSchema = Joi.object({
  productId: Joi.number(),
  quantity: Joi.number(),
});

module.exports = {
  addProductSchema,
  addSaleSchema,
};
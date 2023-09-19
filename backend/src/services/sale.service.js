const { saleModel } = require('../models');
const { validateNewSale } = require('./validations/validationsInputValues');

const findAll = async () => {
  const sales = await saleModel.findAll();
  return { status: 'SUCCESSFUL', data: sales };
};

const findById = async (id) => {
  const sale = await saleModel.findById(id);

  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: sale };
};

const createSale = async ({ productId, quantity }) => {
  const error = validateNewSale({ productId, quantity });
  if (error) return { status: error.status, data: { message: error.message } };

  const sale = await saleModel.insert({ productId, quantity });
  const newSale = { id: sale, productId, quantity };
  return { status: 'CREATED', data: newSale };
};

module.exports = {
  findAll,
  findById,
  createSale,
};
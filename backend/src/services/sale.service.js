const { saleModel } = require('../models');

const findAll = async () => {
  const sales = await saleModel.findAll();
  return { status: 'SUCCESSFUL', data: sales };
};

const findById = async (id) => {
  const sale = await saleModel.findById(id);

  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: sale };
};

const createSale = async (sale) => {
  try {
    const insertSale = await saleModel.insert(sale);
    return { status: 'CREATED', data: insertSale };    
  } catch (error) {
    return { status: error.status, data: { message: 'Product not found' } };
  }
};

module.exports = {
  findAll,
  findById,
  createSale,
};
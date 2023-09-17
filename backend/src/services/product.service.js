const { productModel } = require('../models');
const { validateNewProduct } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

const findById = async (id) => {
  const product = await productModel.findById(id);

  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
};

const createProduct = async ({ name }) => {
  const error = validateNewProduct({ name });
  if (error) return { status: error.status, data: { message: error.message } };

  const productId = await productModel.insert({ name });
  const newProduct = { id: productId, name };
  return { status: 'CREATED', data: newProduct };
};

module.exports = {
  findAll,
  findById,
  createProduct,
};
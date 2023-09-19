const { addProductSchema, addSaleSchema } = require('./shemas');

const validateNewProduct = ({ name }) => {
  const { error } = addProductSchema.validate({ name });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const validateNewSale = ({ productId, quantity }) => {
  const { error } = addSaleSchema.validate({ productId, quantity });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateNewProduct,
  validateNewSale,
};
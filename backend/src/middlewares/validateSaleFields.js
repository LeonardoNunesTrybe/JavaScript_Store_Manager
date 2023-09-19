// const checkRequiredFields = require('../utils/checkRequiredFields');

const validateSaleFields = (req, res, next) => {
  const { body } = req;
  /* /const requiredFields = ['productId', 'quantity'];

  const error = checkRequiredFields(body, requiredFields);
  if (error) {
    return res.status(400).json({ message: '"productId" is required' });
  }/ */
  if (!body) return res.status(400).json({ message: '"productId" is required' });

  if (body[0].productId === 0 || !body[0].productId) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = validateSaleFields;
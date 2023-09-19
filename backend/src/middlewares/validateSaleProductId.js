const validateProductId = (req, res, next) => {
  const { body } = req;
  if (!body.productId) return res.status(400).json({ message: '"productId" is required' });

 if (body[0].productId === 0 || !body[0].productId) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = validateProductId;
const validateSaleQuantity = (req, res, next) => {
  const { body } = req;
  if (!body.quantity) return res.status(400).json({ message: '"quantity" is required' });

  if (body.quantity <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = validateSaleQuantity;
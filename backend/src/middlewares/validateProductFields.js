const checkRequiredFields = require('../utils/checkRequiredFields');

const validateDriverFields = (req, res, next) => {
  const { body } = req;
  const requiredFields = ['name'];

  const error = checkRequiredFields(body, requiredFields);
  if (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (body.name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  return next();
};

module.exports = validateDriverFields;
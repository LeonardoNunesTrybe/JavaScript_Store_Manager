const route = require('express').Router();
const { saleController } = require('../controllers');
const validateSaleFields = require('../middlewares/validateSaleFields');

route.get('/', saleController.findAll);

route.get('/:id', saleController.findById);

route.post('/', validateSaleFields, saleController.createSale);

module.exports = route;
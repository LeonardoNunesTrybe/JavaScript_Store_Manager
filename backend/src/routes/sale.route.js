const route = require('express').Router();
const { saleController } = require('../controllers');
const validateSaleProductId = require('../middlewares/validateSaleProductId');
const validateSaleQuantity = require('../middlewares/validateSaleQuantity');

route.get('/', saleController.findAll);

route.get('/:id', saleController.findById);

route.post(
'/', 
validateSaleProductId,
validateSaleQuantity,
saleController.createSale,
);

module.exports = route;
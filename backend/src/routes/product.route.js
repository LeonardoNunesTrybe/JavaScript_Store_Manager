const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.findAll);

route.get('/:id', productController.findById);

route.post('/', productController.createProduct);

module.exports = route;
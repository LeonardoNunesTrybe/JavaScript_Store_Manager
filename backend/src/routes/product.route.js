const route = require('express').Router();
const { productController } = require('../controllers');
const validateProductFields = require('../middlewares/validateProductFields');

route.get('/', productController.findAll);

route.get('/:id', productController.findById);

route.post('/', validateProductFields, productController.createProduct);

route.put('/:id', validateProductFields, productController.updateProduct);

route.delete('/:id', productController.deleteProduct);

module.exports = route;
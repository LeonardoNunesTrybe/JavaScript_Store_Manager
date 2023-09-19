const productsFromDB = [
  {
  id: 1,
  name: 'Martelo de Thor',
},
{
  id: 2,
  name: 'Traje de encolhimento',
},
{
  id: 3,
  name: 'Escudo do Capitão América',
},
];

const productFromDB = {
  id: 1,
  name: 'Martelo de Thor',
};

const productNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

const productsFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: productsFromDB,
};

const productFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: productFromDB,
};

const productFromServiceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'message' },
};

const productFromServiceCreated = {
  status: 'CREATED',
  data: productFromDB,
};

const productFromServiceInvalidValue = {
  status: 'INVALID_VALUE',
  data: { message: 'message' },
};

const productIdFromDB = { id: 99, name: 'João Bosco' };

const newProductFromModel = 6;

module.exports = {
  productFromDB,
  productsFromDB,
  productsFromServiceSuccessful,
  productFromServiceSuccessful,
  productFromServiceNotFound,
  productNotFound,
  productFromServiceCreated,
  productFromServiceInvalidValue,
  productIdFromDB,
  newProductFromModel,
};
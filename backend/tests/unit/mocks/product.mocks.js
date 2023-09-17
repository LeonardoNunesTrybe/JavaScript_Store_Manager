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

module.exports = {
  productFromDB,
  productsFromDB,
  productsFromServiceSuccessful,
  productFromServiceSuccessful,
  productFromServiceNotFound,
  productNotFound,
};
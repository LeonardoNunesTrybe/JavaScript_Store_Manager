const salesFromDB = [
  {
    saleId: 1,
    date: '2023-09-17T10:29:51.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-09-17T10:29:51.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-09-17T10:29:51.000Z',
    productId: 3,
    quantity: 15,
  },
];

const saleFromDB = {
    saleId: 2,
    date: '2023-09-17T10:29:51.000Z',
    productId: 3,
    quantity: 15,
};

const saleNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

const salesFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: salesFromDB,
};

const saleFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: saleFromDB,
};

const productFromServiceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'message' },
};

module.exports = {
  salesFromDB,
  saleFromDB,
  saleNotFound,
  salesFromServiceSuccessful,
  saleFromServiceSuccessful,
  productFromServiceNotFound,
};
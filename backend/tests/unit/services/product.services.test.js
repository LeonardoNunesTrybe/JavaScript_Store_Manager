const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productFromDB, productsFromDB, productNotFound } = require('../mocks/product.mocks');

describe('Realizando testes - PRODUCT SERVICE:', function () {
  it('Recuperando product por id com sucesso', async function () {
    sinon.stub(productService, 'findById').resolves(productFromDB);

    const inputData = 1;
    const product = await productService.findById(inputData);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productFromDB);
  });

  it('Recuperando products com sucesso', async function () {
    sinon.stub(productService, 'findAll').resolves(productsFromDB);

    const products = await productService.findAll();

    expect(products).to.be.deep.equal(productsFromDB);
    expect(products.length).to.equal(3);
  });

  it('Recuperando product por id sem sucesso', async function () {
    sinon.stub(productService, 'findById').resolves(productNotFound);

    const inputData = 6;
    const product = await productService.findById(inputData);

    expect(product).to.deep.equal({
      status: 'NOT_FOUND',
      data: { message: 'Product not found' },
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
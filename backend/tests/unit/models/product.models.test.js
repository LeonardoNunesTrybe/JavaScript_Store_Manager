const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { productFromDB, productsFromDB } = require('../mocks/product.mock');

describe('Realizando testes - PRODUCT MODEL:', function () {
  it('Recuperando product por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromDB]]);

    const inputData = 1;
    const product = await productModel.findById(inputData);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productFromDB);
  });

  it('Recuperando products com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromDB]);

    const products = await productModel.findAll();

    expect(products).to.be.deep.equal(productsFromDB);
    expect(products.length).to.equal(3);
  });

  afterEach(function () {
    sinon.restore();
  });
});
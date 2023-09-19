const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { productFromDB, productsFromDB } = require('../mocks/product.mocks');

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
    expect(products).to.have.lengthOf(3);
    expect(products).to.be.an('array');
    expect(products.length).to.equal(3);
  });

  it('Inserindo product com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const inputData = { name: 'João Bosco' };
    const result = await productModel.insert(inputData);

    expect(result).to.be.equal(4);
  });

  afterEach(function () {
    sinon.restore();
  });
});
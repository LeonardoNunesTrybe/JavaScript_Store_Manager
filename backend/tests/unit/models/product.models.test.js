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

  // *** VERIFICAR O Q ESTA OCORRENDO AQUI ***
  /* /it('Inserindo product com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([productIdFromDB]);

    const inputData = { id: 99, name: 'João Bosco' };
    const insertId = await productModel.insert(inputData);

    // expect(insertId).to.be.a('array');
    expect(insertId).to.be.equal(productIdFromDB);
  });/ */

  afterEach(function () {
    sinon.restore();
  });
});
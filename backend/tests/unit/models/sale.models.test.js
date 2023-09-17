const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { saleModel } = require('../../../src/models');
const { saleFromDB, salesFromDB } = require('../mocks/product.mocks');

describe('Realizando testes - SALE MODEL:', function () {
  it('Recuperando sale por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([saleFromDB]);

    const inputData = 2;
    const sale = await saleModel.findById(inputData);

    expect(sale).to.deep.equal(saleFromDB);
  });

  it('Recuperando sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesFromDB]);

    const sales = await saleModel.findAll();

    expect(sales).to.be.deep.equal(salesFromDB);
  });

  afterEach(function () {
    sinon.restore();
  });
});
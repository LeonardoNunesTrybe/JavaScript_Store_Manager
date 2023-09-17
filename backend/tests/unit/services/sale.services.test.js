const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleFromDB, salesFromDB, saleNotFound } = require('../mocks/sale.mocks');

describe('Realizando testes - SALE SERVICE:', function () {
  it('Recuperando sale por id com sucesso', async function () {
    sinon.stub(saleService, 'findById').resolves(saleFromDB);

    const inputData = 1;
    const sale = await saleService.findById(inputData);

    expect(sale).to.be.an('object');
    expect(sale).to.be.deep.equal(saleFromDB);
  });

  it('Recuperando sales com sucesso', async function () {
    sinon.stub(saleService, 'findAll').resolves(salesFromDB);

    const products = await saleService.findAll();

    expect(products).to.be.deep.equal(salesFromDB);
    expect(products.length).to.equal(3);
  });

  it('Recuperando sale por id sem sucesso', async function () {
    sinon.stub(saleService, 'findById').resolves(saleNotFound);

    const inputData = 6;
    const sale = await saleService.findById(inputData);

    expect(sale).to.deep.equal({
      status: 'NOT_FOUND',
      data: { message: 'Sale not found' },
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
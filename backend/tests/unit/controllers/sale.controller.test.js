const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const { expect } = chai;

chai.use(sinonChai);

const { saleService } = require('../../../src/services');
const { saleController } = require('../../../src/controllers');
const { 
  saleFromDB,
  salesFromDB,
  salesFromServiceSuccessful,
  saleFromServiceSuccessful,
  // saleFromServiceNotFound,
} = require('../mocks/sale.mocks');

describe('Realizando testes - SALE CONTROLLER:', function () {
  it('Recuperando sales com sucesso - status 200', async function () {
    sinon.stub(saleService, 'findAll').resolves(salesFromServiceSuccessful);

    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesFromDB);
  });

  it('Recuperando sale por id com sucesso - status 200', async function () {
    sinon.stub(saleService, 'findById').resolves(saleFromServiceSuccessful);

    const req = { params: { id: 2 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleController.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleFromDB);
  });

  /* /it('Não recupera sale por id inexistente', async function () {
    sinon.stub(saleService, 'findById').resolves(saleFromServiceNotFound);

    const req = { params: { id: 8 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await saleController.findById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });/ */

  afterEach(function () {
    sinon.restore();
  });
});

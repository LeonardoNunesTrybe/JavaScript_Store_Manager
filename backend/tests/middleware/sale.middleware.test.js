const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const { expect } = chai;

chai.use(sinonChai);

const validateSaleProductId = require('../../src/middlewares/validateSaleProductId');
const validateSaleQuantity = require('../../src/middlewares/validateSaleQuantity');

describe('Realizando testes - SALE MIDDLEWARE', function () {
  it('Testa se o middleware de validação do sale retorna erro quando não for passado productId', async function () {
    const req = { body: { producId: '' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    validateSaleProductId(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWithExactly({ message: '"productId" is required' });
    expect(next).to.not.have.been.calledWith();
  });

  /* /it('Testa se o middleware de validação do sale retorna erro quando productId for inexistente', async function () {
    const req = { body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    validateSaleProductId(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWithExactly({ message: 'Product not found' });
    expect(next).to.not.have.been.calledWith();
  });/ */

  /* /it('Testa se o middleware de validação do product chama o next quando name estiver correto', async function () {
    const req = { body: { producId: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    validateSaleProductId(req, res, next);

    expect(next).to.have.been.calledWith();
  });/ */

  it('Testa se o middleware de validação do sale retorna erro quando não for passado quantity', async function () {
    const req = { body: { quantity: '' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    validateSaleQuantity(req, res, next);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWithExactly({ message: '"quantity" is required' });
    expect(next).to.not.have.been.calledWith();
  });

  it('Testa se o middleware de validação do sale retorna erro quando quantity for menor que 1', async function () {
    const req = { body: { quantity: '0' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    validateSaleQuantity(req, res, next);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWithExactly({ message: '"quantity" must be greater than or equal to 1' });
    expect(next).to.not.have.been.calledWith();
  });

  it('Testa se o middleware de validação do product chama o next quando name estiver correto', async function () {
    const req = { body: { quantity: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    validateSaleQuantity(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});
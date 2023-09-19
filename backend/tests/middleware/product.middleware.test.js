const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const { expect } = chai;

chai.use(sinonChai);

const validateProductFields = require('../../src/middlewares/validateProductFields');

describe('Realizando testes - PRODUCT MIDDLEWARE', function () {
  it('Testa se o middleware de validação do product retorna erro quando não for passado name', async function () {
    const req = { body: { name: '' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    validateProductFields(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWithExactly({ message: '"name" is required' });
    expect(next).to.not.have.been.calledWith();
  });

  it('Testa se o middleware de validação do product retorna erro quando name tiver menos de 5 caracteres', async function () {
    const req = { body: { name: 'AA' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    validateProductFields(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWithExactly({ message: '"name" length must be at least 5 characters long' });
    expect(next).to.not.have.been.calledWith();
  });

  it('Testa se o middleware de validação do product chama o next quando name estiver correto', async function () {
    const req = { body: { name: 'ProdutoX' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();
    validateProductFields(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});
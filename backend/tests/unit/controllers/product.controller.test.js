const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const { expect } = chai;

chai.use(sinonChai);

const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const { 
  productFromDB,
  productsFromDB,
  productsFromServiceSuccessful,
  productFromServiceSuccessful,
  productFromServiceNotFound,
} = require('../mocks/product.mocks');

describe('Realizando testes - PRODUCT CONTROLLER:', function () {
  it('Recuperando products com sucesso - status 200', async function () {
    sinon.stub(productService, 'findAll').resolves(productsFromServiceSuccessful);

    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsFromDB);
  });

  it('Recuperando product por id com sucesso - status 200', async function () {
    sinon.stub(productService, 'findById').resolves(productFromServiceSuccessful);

    const req = { params: { id: 2 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productFromDB);
  });

  it('Não recupera product por id inexistente', async function () {
    sinon.stub(productService, 'findById').resolves(productFromServiceNotFound);

    const req = { params: { id: 8 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  afterEach(function () {
    sinon.restore();
  });
});

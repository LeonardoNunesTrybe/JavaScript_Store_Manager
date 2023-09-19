const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando se requisição de product esta funcionando', function () {
  it('Testando GET /products', async function () {
    const response = await chai
      .request(app)
      .get('/products');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Array);
  });

  it('Testando GET /products/:id', async function () {
    const response = await chai
      .request(app)
      .get('/products/1');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Object);
  });

  it('Testando POST /products com sucesso', async function () {
    const response = await chai
      .request(app)
      .post('/products')
      .send({
        name: 'XABLAU',
      });
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.instanceOf(Object);
  });

  it('Testando POST /products sem sucesso por falta do name', async function () {
    const response = await chai
      .request(app)
      .post('/products')
      .send({
        name: '',
      });
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.instanceOf(Object);
  });

  it('Testando POST /products sem sucesso por name com menos de 5 caracteres', async function () {
    const response = await chai
      .request(app)
      .post('/products')
      .send({
        name: 'XA',
      });
    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.instanceOf(Object);
  });
});
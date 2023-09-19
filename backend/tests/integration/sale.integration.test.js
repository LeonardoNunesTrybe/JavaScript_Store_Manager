const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando se requisição de sales esta funcionando', function () {
  it('Testando GET /sales', async function () {
    const response = await chai
      .request(app)
      .get('/sales');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Array);
  });
  
  it('Testando GET /sales/:id', async function () {
    const response = await chai
      .request(app)
      .get('/sales/1');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Array);
  });

  /* /it('Testando POST /sales', async function () {
    const mockSale = [{
      productId: 1,
      quantity: 5,
    }];

    const response = await chai
      .request(app)
      .post('/sales')
      .send(mockSale);
    expect(response.status).to.be.equal(201);
    expect(response.body.sales).to.be.instanceOf(Array);
  });/ */
});
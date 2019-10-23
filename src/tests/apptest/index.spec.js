import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testing the entry point of the application', () => {
  it('should return welcome to shibi app', done => {
    chai
      .request(app)
      .get('/')
      .end((err, response) => {
        expect(response.status).to.equal(200);
        expect(response).to.be.an('Object');
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('Welcome to Shibi app API');
        done();
      });
  });

  it('should throw an error when an unknown route is accessed', done => {
    chai
      .request(app)
      .get('/api/v1/wrong-route')
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body.status).to.be.equal(404);
        expect(response.body.error).to.be.equal('Error');
        expect(response.body.message).to.be.equal(
          'You are trying to access a wrong Route'
        );
        done();
      });
  });

  it('should return welcome to shibi app', done => {
    chai
      .request(app)
      .get('/api/v1')
      .end((err, response) => {
        expect(response.status).to.equal(200);
        expect(response).to.be.an('Object');
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal(
          'Welcome to Shibi api version 1'
        );
        done();
      });
  });
});

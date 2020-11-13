const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupExpressServer } = require("../src/server");
const app = setupExpressServer();

describe("The express server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("GET /todos", () => {
    it("get http-status-code 200", (done) => {
      // Setup
      // Exercise & Assert
      request.get("/todos").end(function(err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
      // Teardown
    });
  });

});
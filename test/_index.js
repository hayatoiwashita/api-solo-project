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
      request.get("/todos").end(function (err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
      // Teardown
    });

    // it("get registered data", (done) => {
    //   // Setup
    //   const expected = [
    //     {
    //       "id": 1,
    //       "user_id": 123,
    //       "title": "study",
    //       "content": "make todo API",
    //       "status": "DONE",
    //       "createdAt": "2020-11-13T06:21:04.876Z",
    //       "updatedAt": "2020-11-13T07:17:35.584Z"
    //     },
    //     {
    //       "id": 3,
    //       "user_id": 123,
    //       "title": "study",
    //       "content": "make todo API",
    //       "status": "DONE",
    //       "createdAt": "2020-11-13T07:03:12.030Z",
    //       "updatedAt": "2020-11-13T07:18:44.361Z"
    //     },
    //     {
    //       "id": 4,
    //       "user_id": 123,
    //       "title": "shopping",
    //       "content": "buy shoes",
    //       "status": "PROGRESS",
    //       "createdAt": "2020-11-13T07:37:27.746Z",
    //       "updatedAt": "2020-11-13T07:37:27.746Z"
    //     }
    //   ];

    //   // Exercise & Assert
    //   request.get("/todos").end(function(err, res) {
    //     expect(res.body).to.deep.equal(expected);
    //     expect(err).to.be.null;
    //     done();
    //   });
    //   // Teardown
    // });
  });

  describe("GET /todos/:id", () => {
    it("get http-status-code 200", (done) => {
      // Setup
      // Exercise & Assert
      request.get("/todos/1").end(function (err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
      // Teardown
    });

    // it("get the data of the specified id", (done) => {
    //   // Setup
    //   const expected = {
    //     "id": 1,
    //     "user_id": 123,
    //     "title": "study",
    //     "content": "make todo API",
    //     "status": "DONE",
    //     "createdAt": "2020-11-13T06:21:04.876Z",
    //     "updatedAt": "2020-11-13T07:17:35.584Z"
    //   };

    //   // Exercise & Assert
    //   request.get("/todos/1").end(function(err, res) {
    //     expect(res.body).to.deep.equal(expected);
    //     expect(err).to.be.null;
    //     done();
    //   });
    //   // Teardown
    // });
  });

  describe("POST /todos", () => {
    it("", (done) => {
      // Setup
      postData = {
        "user_id": 123,
        "title": "shopping",
        "content": "buy shoes",
        "status": "PROGRESS"
      };

      // Exercise & Assert
      request.post("/todos").send(postData).end(function (err, res) {
        expect(res).to.have.status(201);
        expect(err).to.be.null;
        done();
      });
      // Teardown
    });
  });
});
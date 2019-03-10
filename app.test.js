const request = require("supertest");
const app = require("./app");

describe("Server", () => {
  test("GET /", () => {
    return request(app)
      .get("/")
      .expect(200);
  });
});

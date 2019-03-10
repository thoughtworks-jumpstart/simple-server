const request = require("supertest");
const app = require("./app");

describe("Server", () => {
  test("GET /", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect("Hello, world!");
  });

  test("GET /favicon.ico", () => {
    return request(app)
      .get("/favicon.ico")
      .expect("content-type", "image/x-icon")
      .expect(200);
  });

  test("GET /greet", () => {
    return request(app)
      .get("/greet")
      .expect(200)
      .expect("Greet someone by name");
  });

  test("GET /greet?name=Bob", () => {
    return request(app)
      .get("/greet?name=Bob")
      .expect(200)
      .expect("Hello, Bob!");
  });
});

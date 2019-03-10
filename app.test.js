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
      .get("/greet")
      .query({ name: "Bob" })
      .expect(200)
      .expect("Hello, Bob!");
  });

  describe("GET /secret", () => {
    test("should deny access to route", done => {
      request(app)
        .get("/secret")
        .expect(403, done);
    });

    test("should deny access to route with incorrect token", done => {
      request(app)
        .get("/secret")
        .set("Authorization", "Bearer " + "incorrect-token")
        .expect(403, done);
    });

    test("should grant access to route with correct token", () => {
      return request(app)
        .get("/secret")
        .set("Authorization", "Bearer " + "super-secret-token")
        .expect(200)
        .expect("Welcome to my secret garden!");
    });
  });
});

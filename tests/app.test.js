const request = require("supertest");
const app = require("../src/app");

describe("DevOps Jenkins API", () => {
  test("GET / should return a success response", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "DevOps Jenkins API is running"
    );
  });

  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});
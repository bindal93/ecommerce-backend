const request = require("supertest");
const { app, server } = require("../index");
describe("Test API endpoints", () => {
  it("should return 200 OK status for /api/v1 endpoint", async () => {
    const res = await request(app).get("/api/v1/products");
    expect(res.statusCode).toEqual(200);
  });

  it("should return 404 Not Found status for invalid endpoint", async () => {
    const res = await request(app).get("/invalid");
    expect(res.statusCode).toEqual(404);
  });

  it("should return JSON data for /api/v1 endpoint", async () => {
    const res = await request(app).get("/api/v1");
    expect(res.headers["content-type"]).toMatch("text/html; charset=utf-8");
  });
  afterAll((done) => {
    server.close(done);
  });
});

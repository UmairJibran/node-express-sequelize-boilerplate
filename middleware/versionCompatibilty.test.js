jest.setTimeout(50000);

const request = require("supertest");
const faker = require("faker");
const app = require("../app");

describe("Test Version Compatibility", () => {
  test("Should return 401 for version not provided", async () => {
    const response = await request(app).get("/api/");
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Version not provided");
  });
  test("Should return 401 for version not compatible", async () => {
    const response = await request(app)
      .get("/api/")
      .set({ version: faker.datatype.float(1) });
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe(
      "Version not supported, kindly update your application"
    );
  });
});

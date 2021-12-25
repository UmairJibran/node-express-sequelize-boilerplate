require("dotenv").config({ path: "./config/environments/.env" });
jest.setTimeout(50000);

const request = require("supertest");
const app = require("../app");

const faker = require("faker");
const { sample } = require("lodash");

describe("Test User Registeration Function", () => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    provider: sample(["google", "apple"]),
    uid: faker.datatype.uuid(),
    imageUrl: faker.image.avatar(),
  };

  test("It should register a user", async () => {
    const response = await request(app)
      .post("/api/users/sign-in")
      .send(user)
      .set({ version: process.env.VERSION });
    expect(response.statusCode).toBe(200);
    expect(Object.keys(response.body).length).toBeGreaterThan(0);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("imageUrl");
    expect(response.body).toHaveProperty("provider");
    expect(response.body).toHaveProperty("uid");
  });

  test("It should let an existing user login", async () => {
    const response = await request(app)
      .post("/api/users/sign-in")
      .send(user)
      .set({ version: process.env.VERSION });
    expect(response.statusCode).toBe(200);
    expect(Object.keys(response.body).length).toBeGreaterThan(0);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("imageUrl");
    expect(response.body).toHaveProperty("provider");
    expect(response.body).toHaveProperty("uid");
  });

  test("It should not register a user, respond in missing field {name}", async () => {
    const response = await request(app)
      .post("/api/users/sign-in")
      .send({
        email: faker.internet.email(),
        provider: sample(["google", "apple"]),
        uid: faker.datatype.uuid(),
        imageUrl: faker.image.avatar(),
      })
      .set({ version: process.env.VERSION });
    expect(response.statusCode).toBe(403);
    expect(response.body.message).toBe("name is required");
  });

  test("It should not register a user, respond in missing field {email}", async () => {
    const response = await request(app)
      .post("/api/users/sign-in")
      .send({
        name: faker.name.findName(),
        provider: sample(["google", "apple"]),
        uid: faker.datatype.uuid(),
        imageUrl: faker.image.avatar(),
      })
      .set({ version: process.env.VERSION });
    expect(response.statusCode).toBe(403);
    expect(response.body.message).toBe("email is required");
  });

  test("It should not register a user, respond in missing field {provider}", async () => {
    const response = await request(app)
      .post("/api/users/sign-in")
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        uid: faker.datatype.uuid(),
        imageUrl: faker.image.avatar(),
      })
      .set({ version: process.env.VERSION });
    expect(response.statusCode).toBe(403);
    expect(response.body.message).toBe("provider is required");
  });

  test("It should not register a user, respond in missing field {uid}", async () => {
    const response = await request(app)
      .post("/api/users/sign-in")
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        provider: sample(["google", "apple"]),
        imageUrl: faker.image.avatar(),
      })
      .set({ version: process.env.VERSION });
    expect(response.statusCode).toBe(403);
    expect(response.body.message).toBe("uid is required");
  });

  test("It should not register a user, respond in missing field {imageUrl}", async () => {
    const response = await request(app)
      .post("/api/users/sign-in")
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        provider: sample(["google", "apple"]),
        uid: faker.datatype.uuid(),
      })
      .set({ version: process.env.VERSION });
    expect(response.statusCode).toBe(403);
    expect(response.body.message).toBe("imageUrl is required");
  });
});

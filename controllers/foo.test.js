require("dotenv").config();

const request = require("supertest");
const app = require("../app");

const faker = require("faker");

describe("Test Foo Function", () => {
	const variables = {
		message: "",
	};

	beforeAll(() => {
		variables.message = faker.lorem.word(5);
	});

	afterAll(() => {
		variables.message = "";
	});

	test("It should response the GET method", async () => {
		expect.assertions(6);

		const response = await request(app).get("/api/foo");
		expect(response.statusCode).toBe(200);
		expect(response.body).toBeTruthy();
		expect(response.body.success).toBeDefined();
		expect(response.body.success).toBeTruthy();
		expect(response.body.message).toBe("Hello, world!");
		expect(response.body.message).not.toBe(variables.message);
	});
});

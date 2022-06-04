import app from "../../../app.js";
import request from "supertest";

describe("Deployment", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/deploy").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("Deployed successfully");
  });
  test("Should respond with correct body", async () => {
    const response = await request(app).get("/deploy").send();
    expect(response.body).toBe("Deployed successfully");
  });
  //use test.only() for skip everyone else or use describe.only() for only execute the tests into describe section
});

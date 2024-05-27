// import { describe, it } from "node:test";
import request from "supertest";
import { calculateDiscount } from "./src/utils";
import app from "./src/app";

describe.skip("App", () => {
  it("should calculate the discount", () => {
    const result = calculateDiscount(100, 20);
    expect(result).toBe(20);
  });

  it("should return 200 status", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
  });
});

import request from "supertest";
import app from "../../src/app";

describe("POST /auth/register", () => {
  describe("Give all fields", () => {
    it("should return the 201 status code", async () => {
      // AAA => Arrange , Act ,Assert
      //Arrange
      const userData = {
        firstName: "Jhon",
        lastName: "Doe",
        email: "test@test.com",
        password: "secret",
      };
      // Act
      const response = await request(app).post("/auth/register").send(userData);

      // Assert
      expect(response.statusCode).toBe(201);
    });
    it("should retrun vaild jsn response", async () => {
      // AAA => Arrange , Act ,Assert
      //Arrange
      const userData = {
        firstName: "Jhon",
        lastName: "Doe",
        email: "test@test.com",
        password: "secret",
      };
      // Act
      // Assert application/json utf-8
      const response = await request(app).post("/auth/register").send(userData);

      // Assert
      expect(
        (response.headers as Record<string, string>)["content-type"],
      ).toEqual(expect.stringContaining("json"));
    });
  });
  describe("Fields are missing", () => {});
});

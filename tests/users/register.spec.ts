import request from "supertest";
import app from "../../src/app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../src/config/data-source";
import { User } from "../../src/entity/User";
import { truncateTables } from "../utils";

describe("POST /auth/register", () => {
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
  });

  beforeEach(async () => {
    //Database truncate
    await truncateTables(connection);
  });

  afterAll(async () => {
    await connection.destroy();
  });

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

    it("should presist the user in the database", async () => {
      // AAA => Arrange , Act ,Assert
      //Arrange
      const userData = {
        firstName: "Jhon",
        lastName: "Doe",
        email: "test@test.com",
        password: "secret",
      };
      // Act
      // const response = await request(app).post("/auth/register").send(userData);
      const response = await request(app).post("/auth/register").send(userData);

      // eslint-disable-next-line no-console
      console.log("response", response);

      // Assert
      const userRepository = connection.getRepository(User);
      const users = await userRepository.find();

      expect(users).toHaveLength(1);
    });
  });
  // describe("Fields are missing", () => { });
});

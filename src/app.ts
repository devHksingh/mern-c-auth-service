import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";
// import createError from "http-errors";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const app = express();

app.get("/", async (req, res) => {
  res.status(200).send("wlcm to auth service");
});

//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});
export default app;

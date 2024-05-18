import express from "express";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("wlcm to auth service");
});

export default app;

import serverless from "serverless-http";
import express from "express";
const app = express();

app.get("/", (_req, res) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (_req, res) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((_req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);

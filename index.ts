import "dotenv/config";
import serverless from "serverless-http";
import express from "express";
import { loggingMiddleware } from "./src/middleware/logging.middleware.ts";
import { sessionMiddleware } from "./src/middleware/session.middleware.ts";
import errorHandler from "./src/middleware/errorHandler.middleware.ts";
import { appRouter } from "./src/routes/app.route.ts";

const app = express();

app.use(loggingMiddleware)

app.use(sessionMiddleware)

app.use(appRouter)

app.use(errorHandler)

exports.handler = serverless(app);

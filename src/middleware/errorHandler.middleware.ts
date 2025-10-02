import { type NextFunction, type Request, type Response } from "express";
import console from "node:console";

export default function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction,
) {
  switch (error.name) {
    case "NotFoundError":
      response.status(404).json({
        error: { message: "Resource not found." + " " + error.message },
      });
      break;

    case "ValidationError":
    case "BadRequestError":
      response.status(400).json({
        error: { message: "Request is invalid." + " " + error.message },
      });
      break;

    default:
      logError(error);
      next();
      break;
  }
}

function logError(error: unknown): void {
  if (error instanceof Error) {
    console.error("❌ Error Message:", error.message);
    console.error("📌 Stack Trace:", error.stack);
  } else {
    console.error("⚠️ Unknown error:", JSON.stringify(error, null, 2));
  }
}

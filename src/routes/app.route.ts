import { Router } from "express";
import { home, path, reflect } from "../controllers/app.controller.ts";
import validationMiddleware from "../middleware/validation.middleware.ts";
import { body } from "express-validator";

export const appRouter = Router();

appRouter.get("/", home);

appRouter.get("/hello", path);

appRouter.post(
  "/reflect",
  body("data").notEmpty().trim().isLength({ min: 2, max: 16 }),
  validationMiddleware,
  reflect,
);

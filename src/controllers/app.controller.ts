import { Request, Response } from "express";

export function home(_request: Request, response: Response) {
  response.json({
    message: "Hello, World!",
  });
}

export function path(_request: Request, response: Response) {
  response.json({
    message: "Hello, World! from path",
  });
}

export function reflect(request: Request, response: Response) {
  response.json(request.body);
}

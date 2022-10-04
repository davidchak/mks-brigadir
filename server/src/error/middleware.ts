import express from "express";
import { HTTPError } from ".";

const errorMiddleware = (
  err: Error | HTTPError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (err && err instanceof HTTPError) {
    return res.status(err.code).json({
      error: err.message,
    });
  }

  if (err && err instanceof Error) {
    return res.status(500).json({
      error: err.message,
    });
  }

  return new HTTPError(500);
};

export default errorMiddleware;

import express from "express";
import { HTTPError } from ".";
declare const errorMiddleware: (err: Error | HTTPError, req: express.Request, res: express.Response, next: express.NextFunction) => HTTPError | express.Response<any, Record<string, any>>;
export default errorMiddleware;

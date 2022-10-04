import { IHTTPError } from "./types";
import httpStatus from "http-status";

export class HTTPError extends Error implements IHTTPError {
  code!: number;

  constructor(code: number, message?: string) {
    super(message ? message : (httpStatus[code] as string));
    this.code = code;
  }
}

import { IHTTPError } from "./types";
export declare class HTTPError extends Error implements IHTTPError {
    code: number;
    constructor(code: number, message?: string);
}

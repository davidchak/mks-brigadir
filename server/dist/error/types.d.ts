export interface IHTTPError extends Error {
    name: string;
    message: string;
    code: number;
}

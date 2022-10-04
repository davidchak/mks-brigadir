"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = void 0;
const http_status_1 = __importDefault(require("http-status"));
class HTTPError extends Error {
    constructor(code, message) {
        super(message ? message : http_status_1.default[code]);
        this.code = code;
    }
}
exports.HTTPError = HTTPError;
//# sourceMappingURL=index.js.map
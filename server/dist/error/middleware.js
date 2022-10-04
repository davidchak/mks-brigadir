"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const errorMiddleware = (err, req, res, next) => {
    if (err && err instanceof _1.HTTPError) {
        return res.status(err.code).json({
            error: err.message,
        });
    }
    if (err && err instanceof Error) {
        return res.status(500).json({
            error: err.message,
        });
    }
    return new _1.HTTPError(500);
};
exports.default = errorMiddleware;
//# sourceMappingURL=middleware.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_1 = require("./ioc");
const body_parser_1 = __importDefault(require("body-parser"));
const inversify_express_utils_1 = require("inversify-express-utils");
const pino_http_1 = __importDefault(require("pino-http"));
const cors_1 = __importDefault(require("cors"));
const middleware_1 = __importDefault(require("./error/middleware"));
const http_1 = require("http");
const port = process.env.PORT || 5000;
const useSetupMiddleware = (app) => {
    app.use(body_parser_1.default.urlencoded({
        extended: true,
    }));
    app.use(body_parser_1.default.json());
    app.use((0, pino_http_1.default)());
    app.use((0, cors_1.default)({
        origin: "*",
    }));
    app.disable("x-powered-by");
};
const useErrorMiddleware = (app) => {
    app.use(middleware_1.default);
};
const apiApplication = new inversify_express_utils_1.InversifyExpressServer(ioc_1.apiContainer, null, {
    rootPath: "/api",
})
    .setConfig(useSetupMiddleware)
    .setErrorConfig(useErrorMiddleware)
    .build();
const httpServer = (0, http_1.createServer)(apiApplication).listen(port, () => {
    console.log(`Server started at http://localhost:${port}/api`);
});
exports.default = httpServer;
//# sourceMappingURL=index.js.map
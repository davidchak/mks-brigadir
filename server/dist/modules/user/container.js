"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const controller_1 = require("./controller");
const blockDIContainer = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.UserController).to(controller_1.UserController);
});
exports.default = blockDIContainer;
//# sourceMappingURL=container.js.map
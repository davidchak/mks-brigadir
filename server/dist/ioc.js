"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiContainer = void 0;
const inversify_1 = require("inversify");
const container_1 = __importDefault(require("./modules/user/container"));
const apiContainer = new inversify_1.Container();
exports.apiContainer = apiContainer;
apiContainer.load(container_1.default);
//# sourceMappingURL=ioc.js.map
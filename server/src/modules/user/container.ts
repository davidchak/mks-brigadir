import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import { TYPES } from "../../types";
import { Controller } from "inversify-express-utils";
import { UserController } from "./controller";

const blockDIContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<Controller>(TYPES.UserController).to(UserController);
});

export default blockDIContainer;

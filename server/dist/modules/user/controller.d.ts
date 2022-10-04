import { interfaces } from "inversify-express-utils";
import "reflect-metadata";
import express from "express";
export declare class UserController implements interfaces.Controller {
    getUser(next: express.NextFunction): Promise<any>;
}

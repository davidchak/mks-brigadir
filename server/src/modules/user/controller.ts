import {
    controller,
    interfaces,
    next,
    httpGet
} from "inversify-express-utils";
import "reflect-metadata";
import { randomBytes } from "crypto";
import express from "express";


@controller("/user")
export class UserController implements interfaces.Controller {
    @httpGet("/")
    public async getUser(
        @next() next: express.NextFunction
    ): Promise<any> {
        try {
            return {
                id: randomBytes(8).toString('hex'),
                name: 'test',
                email: 'test@mail.ru'
            }
        } catch (e) {
            next(e);
        }
    }
}

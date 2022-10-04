import { apiContainer } from "./ioc";
import bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import { Application, Request, Response } from "express";
import pinoHttp from "pino-http"
import cors from "cors";
import errorMiddleware from "./error/middleware";
import { createServer } from "http";

const port = process.env.PORT || 5000;


const useSetupMiddleware = (app: Application) => {
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
    app.use(bodyParser.json());
    app.use(pinoHttp());
    app.use(
        cors({
            origin: "*",
        })
    );
    app.disable("x-powered-by");
};

const useErrorMiddleware = (app: Application) => {
    // Обработка ошибок
    app.use(errorMiddleware);
};

// Инициализация api
const apiApplication = new InversifyExpressServer(apiContainer, null, {
    rootPath: "/api",
})
    .setConfig(useSetupMiddleware)
    .setErrorConfig(useErrorMiddleware)
    .build();

// Инициализация http сервера
const httpServer = createServer(apiApplication).listen(port, () => {
    console.log(`Server started at http://localhost:${port}/api`)
});

export default httpServer;

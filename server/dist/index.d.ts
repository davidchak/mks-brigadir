/// <reference types="node" />
/// <reference types="node/http" />
/// <reference types="pino-http" />
declare const httpServer: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
export default httpServer;

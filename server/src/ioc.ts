import { Container, injectable, decorate } from "inversify";
import userDIContainer from "./modules/user/container";

const apiContainer = new Container();

apiContainer.load(userDIContainer);

export { apiContainer };
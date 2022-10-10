import { GetLocalController } from "../controllers/local/GetLocalController";
import { Router } from "express";
const localRouter = Router();
const getLocal = new GetLocalController();

localRouter.get("/local/:id", getLocal.handle);
localRouter.get("/local", getLocal.locals);

export { localRouter };

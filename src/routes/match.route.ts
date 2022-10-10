import { Router } from "express";
import { CreateMatchControler } from "../controllers/mactch/CreateMatchControler";
const router = Router();

const createMatch = new CreateMatchControler();

router.post("/match", createMatch.handle);

export { router };

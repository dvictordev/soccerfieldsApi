import { Router } from "express";
import { CreateMatchControler } from "../controllers/mactch/CreateMatchControler";
const router = Router();

const matchContr = new CreateMatchControler();
//necessesario passar o localId no body
router.post("/match", matchContr.handleCreateMatch);


export { router };

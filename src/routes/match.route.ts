import {Router} from "express";
import { CreateMatchControler } from "../controllers/CreateMatchControler";

const router = Router()

const createMatch = new CreateMatchControler()

router.post('/match', createMatch.handle)

export {router}
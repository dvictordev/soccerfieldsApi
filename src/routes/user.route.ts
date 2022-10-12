import { Router } from "express";
import { userController } from "../controllers/user/userController";

const userContr = new userController()
const userRouter = Router()

userRouter.post('/user', userContr.login)

export {userRouter}
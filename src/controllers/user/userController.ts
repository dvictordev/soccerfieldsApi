import { Request, Response } from "express";
import { registerUser } from "../../utils/registration/auth.server";
import { validateUser } from "../../utils/userValidation/validateUser";

export class userController{
    async createUser(req:Request, res:Response){
        const user = req.body
        const newUser = await registerUser(user)
        
        return res.json(newUser)
    }

    async login(req:Request, res:Response){
        const userParams = req.body
        const user = await validateUser(userParams)

        return res.send(user)
    }
}
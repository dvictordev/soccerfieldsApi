import { Request, Response } from "express";
import { validateUser } from "../../utils/validateUser";

export class userController{
    async login(req:Request, res:Response){
        const {email} = req.body
        const exists = await validateUser(email)
        
        
    }
}
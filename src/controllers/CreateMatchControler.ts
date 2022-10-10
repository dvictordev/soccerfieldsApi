import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export class CreateMatchControler{
    async handle(req:Request, res: Response){
        const {owner, hour, date, local}= req.body
        const match = await prisma.match.create({
            data:{
                owner,
                hour,
                date,
                local,
                
            }
        })

        return res.status(201).json(match)
    }
}
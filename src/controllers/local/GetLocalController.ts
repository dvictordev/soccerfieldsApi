import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export class GetLocalController {
  async handle(req: Request, res: Response) {
    const localId = req.params.id;
    const local = await prisma.local.findUnique({
      where: {
        id: localId,
      },
      select:{
        local:true,
        hours:true,
        fieldType:true,
        bannerUrl:true,
        Match:true
      }
    });

    return res.json(local);
  }

  async locals(req: Request, res: Response) {
    const local = await prisma.local.findMany();

    res.json(local);
  }
}

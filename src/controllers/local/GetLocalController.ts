import { match } from "assert";
import { Request, Response } from "express";
import { filterHours } from "../../utils/filterHours";
// import { filterHours } from "../../utils/filterHours";
import { prisma } from "../../utils/prisma";

export class GetLocalController {
  async handle(req: Request, res: Response) {
    const localId = req.params.id;
    const local = await prisma.local.findUnique({
      where: {
        id: localId,
      },
      select: {
        local: true,
        hours: true,
        fieldType: true,
        bannerUrl: true,
        Match: true,
      },
    });

    return res.json(local);
  }

  async getFreeHours(req: Request, res: Response) {
    const { date, localId } = req.body;

    const hours = await prisma.local.findUnique({
      where:{
        id:localId
      },
      select:{
        hours:true
      }
    })


    const matchs = await prisma.match.findMany({
      where:{
        date,
        localId
      }
    })

    hours?.hours.sort()

    filterHours(matchs, hours)

    
    
    // const filteredHours = filterHours(newHours)

    return res.json(hours?.hours)


  }

}

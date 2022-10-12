import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

interface HourProps {
  hours: [];
  hour: string;
}

function upgradeHours(hours: String[], hour: String) {
  let hourFiltered = hours.filter((e) => hour != e);
  console.log(hourFiltered);
}

export class CreateMatchControler {
  async handleCreateMatch(req: Request, res: Response) {
    const { owner, hour, date, localId } = req.body;
    const match = await prisma.match.create({
      data: {
        owner,
        hour,
        date,
        localId: localId,
      },
    });

    const hours = await prisma.local.findUnique({
      where: {
        id: localId,
      },
      select: {
        hours: true,
      },
    });
    // return res.send(hours);
    function filterHour(hour: any) {
      return hours?.hours.filter((e: any) => e != hour);
    }

    await prisma.local.update({
      where: {
        id: localId,
      },
      data: {
        hours: filterHour(hour),
      },
    });

    return res.json(match);
  }


  async matchByLocalId(req:Request, res:Response){
    const localId = req.params
    const match = await prisma.match.findMany({
      where:{
        localId:JSON.stringify(localId)
      }
    })

    return res.json(match)
  }
}

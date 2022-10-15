import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { updateHour } from "../../utils/updateHour";

export class CreateMatchControler {
  async handleCreateMatch(req: Request, res: Response) {
    const { owner, hour, date, fixed, localId } = req.body;
    const match = await prisma.match.create({
      data: {
        owner,
        hour,
        date,
        fixed,
        localId: localId,
      },
    });

    // const hours = await prisma.local.findUnique({
    //   where: {
    //     id: localId,
    //   },
    //   select: {
    //     hours: true,
    //   },
    // });

    // await prisma.local.update({
    //   where: {
    //     id: localId,
    //   },
    //   data: {
    //     hours: updateHour(hour, hours),
    //   },
    // });

    return res.json(match);
  }

  async matchByLocalId(req: Request, res: Response) {
    const localId = req.params;
    const match = await prisma.match.findMany({
      where: {
        localId: JSON.stringify(localId),
      },
    });

    return res.json(match);
  }
}

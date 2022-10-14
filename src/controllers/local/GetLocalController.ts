import { Request, Response } from "express";
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

    let arrHours: any = [];

    const hours = await prisma.local.findUnique({
      where: {
        id: localId,
      },
      select: {
        hours: true,
      },
    });
    const matchs = await prisma.match.findMany({
      where: {
        date,
        localId,
      },
      select: {
        owner: true,
        hour: true,
        date: true,
      },
    });

    matchs.forEach((match) => {
      hours?.hours.forEach((hour) => {
        if (match.hour != hour) {
          arrHours.push(hour);
        }
      });
    });

    const newHours: any = arrHours.filter(
      (este: any, i: any) => arrHours.indexOf(este) === i
    );

    return res.send(newHours);
  }

  async locals(req: Request, res: Response) {
    const local = await prisma.local.findMany();

    res.json(local);
  }
}

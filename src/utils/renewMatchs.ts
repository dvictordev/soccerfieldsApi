import { prisma } from "./prisma";
import { schedule as cron } from "node-cron";

export const cronJob = async () => {
  cron("* * * * * *", () => {});

  const matchs = await prisma.match.findMany();

  matchs.forEach(async (match) => {
    if (match.fixed == false) {
      await prisma.local.update({
        where: {
          id: match.localId,
        },
        data: {
          hours: {
            push: match.hour,
          },
        },
      });

      await prisma.match.delete({
        where: {
          id: match.id,
        },
      });
    }
  });
};

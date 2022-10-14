import { prisma } from "./prisma";
import { schedule as cron } from "node-cron";

export const cronJob = () => {
  cron("* * * * * *", () => {
    console.log("teste do cron");
  });
};

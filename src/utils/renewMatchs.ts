import { prisma } from "./prisma";
import { schedule as cron } from "node-cron";

export const cronJob = async () => {
   cron("55 23 * * *", async () => {
    const today = Date.now()
    const dateNow = new Date(today).toLocaleString().slice(0,10)
  
  
    const matchsByDate = await prisma.match.findMany({
      where:{
        date:'13/10/2020',
        fixed:false
      },
      select:{
        id:true
      }
    })
  
    if(matchsByDate.length > 0){
      matchsByDate.forEach( async (match) =>{
        await prisma.match.delete({
          where:{
            id:match.id
          }
        })
      })
    }

    return
    
   });

  
};

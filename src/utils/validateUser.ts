import { prisma } from "./prisma";
import { formType } from "../types/form.type";

export const validateUser = async ({email}:formType)=>{
    const exists = await prisma.user.count({
        where:{
            email
        }
    })

    if(exists){
        return "user already exists"
    }
    
    return "usuario ok"

}
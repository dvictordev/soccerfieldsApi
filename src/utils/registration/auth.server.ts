import { prisma } from "../prisma";
import { formType } from "../../types/form.type";
import {createUser} from './users.server'

export const registerUser = async (form:formType)=>{
    const exists = await prisma.user.count({where:{email:form.email} })

    if(exists){
        throw new Error(JSON.stringify(
            {
            error:"user already exists",
            status:400}
            )
            )
    }
    
    const newUser = createUser(form)

    if(!newUser){
        throw new Error(JSON.stringify(
            {
            error:"Something went wrong trying to create a new user", 
            fields:{email:form.email, password:form.password},
            status:400
        }),
        )
        return 
    }

    return newUser
}
import { userType } from "../../types/user.type"
import { prisma } from "../prisma"
import bcrypt from 'bcryptjs'

export const validateUser = async(form:userType)=>{
    const user = await prisma.user.findUnique({
        where:{
            email:form.email
        }})

    if(!user || !(await bcrypt.compare(form.password, user.password))){
        throw new Error(
            JSON.stringify(
                {
                    error:"Incorrect login", 
                    status:400
                })
            )
    }

    return user
}
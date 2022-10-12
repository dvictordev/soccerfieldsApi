import { prisma } from '../prisma'
import bcrypt from 'bcryptjs'
import { formType } from '../../types/form.type'


export const createUser = async (user:formType)=> {
    const hashPassword = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.user.create({
        data:{
            email:user.email,
            password: hashPassword,
            profile:{
                firstName:user.firstName,
                lastName:user.lastName
            }
        }
    })

    return {id:newUser.id, email:user.email}
}
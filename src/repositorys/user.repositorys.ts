import { prisma } from "../services/prisma";


export const createUser = async (data : any) => {
    const user = await prisma.user.create({
        data
    });
    console.log(user)
    return user
}
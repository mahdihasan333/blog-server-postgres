import { prisma } from "../../config/db";

const createUser = async(payload: any)=> {
    console.log({payload});
    const createUser = await prisma.user.create({
        data: payload
    })
    return createUser;
}


export const userService = {
    createUser
};
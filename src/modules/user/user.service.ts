import { prisma } from "../../config/db";
import { Prisma, User } from "@prisma/client";

const createUser = async(payload: Prisma.UserCreateInput): Promise<User>=> {
    const createUser = await prisma.user.create({
        data: payload
    })
    return createUser;
}

const getAllFromDB = async() => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            role: true,
            status: true
        }
    });
    return result;
}

export const userService = {
    createUser,
    getAllFromDB
};
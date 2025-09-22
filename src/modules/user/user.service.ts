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
            status: true,
            posts: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return result;
}

const getUserById = async(id: number) => {
    const result = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            status: true,
            posts: true
        }
    })
    return result;
}

export const UserService = {
    createUser,
    getAllFromDB,
    getUserById
};
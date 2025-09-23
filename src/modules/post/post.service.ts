import { Post, Prisma } from "@prisma/client"
import { prisma } from '../../config/db';

const createPost = async(payload: Prisma.PostCreateInput): Promise<Post> => {
    const createPost = await prisma.post.create({
        data: payload,
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    })
    return createPost;
}


const getAllPosts = async() => {
    const result = await prisma.post.findMany();
    return result;
}


const getPostById = async(id: number) => {
    const result = await prisma.post.findUnique({
        where: {
            id
        }
    })
    return result;
}


const deletePost = async(id: number) => {
    const result = await prisma.post.delete({
        where: {
            id
        }
    })
    return result;
}

export const PostService = {
    createPost,
    getAllPosts,
    getPostById,
    deletePost
}
import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUser(req.body);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllFromDB = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllFromDB();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const userController = {
    createUser,
    getAllFromDB
};
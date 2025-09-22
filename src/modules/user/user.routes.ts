import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createUser)

router.get('/', userController.getAllFromDB)

router.get('/:id', userController.getUserById)

router.delete('/:id', userController.deleteUser)

export const userRoutes = router;
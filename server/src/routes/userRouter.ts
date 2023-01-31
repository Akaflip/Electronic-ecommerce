import Express from "express";
import userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const userRouter = Express.Router();

userRouter.post('/login', userController.login);
userRouter.post('/registration', userController.registration);
userRouter.get('/auth', authMiddleware, userController.auth);

export default userRouter;
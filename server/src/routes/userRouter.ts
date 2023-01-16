import Express from "express";
import userController from "../controllers/user.controller";


const userRouter = Express.Router();

userRouter.post('login', userController.login);
userRouter.post('registration', userController.registration);
userRouter.get('auth', userController.auth);

export default userRouter;
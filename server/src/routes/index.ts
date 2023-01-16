import Express from "express";
import brandRouter from "./brandRouter";
import deviceRouter from "./deviceRouter";
import typeRouter from "./typeRouter";
import userRouter from "./userRouter";


const router = Express.Router();

router.use('users', userRouter);
router.use('devices', deviceRouter);
router.use('types', typeRouter);
router.use('brand', brandRouter);
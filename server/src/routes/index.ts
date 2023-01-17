import Express from "express";
import brandRouter from "./brandRouter.js";
import deviceRouter from "./deviceRouter.js";
import typeRouter from "./typeRouter.js";
import userRouter from "./userRouter.js";


const router = Express.Router();

router.use('users', userRouter);
router.use('devices', deviceRouter);
router.use('types', typeRouter);
router.use('brand', brandRouter);

export default router;
import Express from "express";
import deviceController from "../controllers/device.controller.js";
const deviceRouter = Express.Router();
deviceRouter.post('/', deviceController.create);
deviceRouter.get('/:id', deviceController.getOne);
deviceRouter.get('/', deviceController.getAll);
export default deviceRouter;
//# sourceMappingURL=deviceRouter.js.map
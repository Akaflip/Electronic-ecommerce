import Express from "express";
import typeController from "../controllers/type.controller";
const typeRouter = Express.Router();
typeRouter.get('/', typeController.getAll);
typeRouter.post('/', typeController.create);
export default typeRouter;
//# sourceMappingURL=typeRouter.js.map
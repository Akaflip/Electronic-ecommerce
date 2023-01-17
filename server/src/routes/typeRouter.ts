import Express from "express";
import typeController from "../controllers/type.controller.js";


const typeRouter = Express.Router();

typeRouter.get('/', typeController.getAll);
typeRouter.post('/', typeController.create);

export default typeRouter;
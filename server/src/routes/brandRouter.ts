import Express from "express";
import brandController from "../controllers/brand.controller.js";


const brandRouter = Express.Router();

brandRouter.get('/', brandController.getAll);
brandRouter.post('/', brandController.create);

export default brandRouter;
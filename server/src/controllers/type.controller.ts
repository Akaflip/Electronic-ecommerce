import { Request, Response } from 'express';
import {Type} from "../db/models/index.js";
import { apiError } from '../error/apiError.js';


class TypeController {
    async create(req: Request, res: Response) {
        const name = req.body;
        const type = await Type.findOne({where: name});

        if(type) {
            return apiError.badRequest('такой type уже существует')
        };
        const newtype = await Type.create(name);

        return res.json(newtype);
        
        
    };

    async getAll(req: Request, res: Response) {
        const types = await Type.findAll();

        return res.json(types)
    };
}

const typeController = new TypeController;

export default typeController;
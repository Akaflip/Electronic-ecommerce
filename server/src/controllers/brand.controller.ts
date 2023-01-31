import { Request, Response } from 'express';
import {Brand} from "../db/models/index.js";
import { apiError } from '../error/apiError.js';

class BrandController {
    async create(req: Request, res: Response) {
        const name = req.body;
        const brand = await Brand.findOne({where: name});

        if(brand) {
            return apiError.badRequest('такой brand уже существует')
        };
        const newBrand = await Brand.create(name);

        return res.json(newBrand);
        
        
    };

    async getAll(req: Request, res: Response) {
        const brands = await Brand.findAll();

        return res.json(brands)
    };
}

const brandController = new BrandController;

export default brandController;
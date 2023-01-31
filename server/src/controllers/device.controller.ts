import { Request, Response, } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import * as uuid from "uuid";
import {Device, DeviceInfo} from "../db/models/index.js";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export interface TypedRequestBody<T> extends Express.Request {
    query: T
}

class DeviceController {
    async create(req: Request, res: Response) {
        try {
            const {name, price, BrandId, TypeId, info} = req.body;
            const { img }: any = req.files;
            let fileName = uuid.v4() + '.png';
            
            const device = await Device.create(
                {name, price, BrandId, TypeId, img: fileName});

            if(img) {
                img.mv(path.resolve(__dirname, "..", "..", "static", fileName));
            }
            

            if(info) {
                let newInfo = JSON.parse(info);
                newInfo.forEach((e: { title: any; description: any; }) => {
                    DeviceInfo.create({
                        title: e.title,
                        description: e.description,
                        deviceId: device.id
                    });
                });
            };

            return res.json(device);


        } catch(e) {
            console.log(e);
        }
    };

    async getOne(req: Request, res: Response) {
        const { id } = req.params;
        const device = await Device.findOne({
            where: {id},
            //include: [{model: DeviceInfo, as: "info"}]
        });
        return res.json(device);
    };

    async getAll(req: TypedRequestBody<{
        BrandId: number,
        TypeId: number,
        page: number,
        limit: number,
    }>, res: Response) {


        let {BrandId, TypeId, page, limit} = req.query;
        page = page || 1;
        limit = limit || 9;
        const offset = page * limit - limit;
        let devices;

       if(!TypeId && !BrandId) devices = await Device.findAndCountAll({limit, offset});
       
        else if(TypeId && !BrandId) devices = await Device.findAndCountAll({where: {TypeId}, limit, offset});
       
       else if(!TypeId && BrandId) devices = await Device.findAndCountAll({where: {BrandId}, limit, offset});
       
       else if(TypeId && BrandId) devices = await Device.findAndCountAll({where: {TypeId, BrandId}, limit, offset});

        return res.json(devices);

        
    };

    async removeOne(req: Request, res: Response) {
        const { id } = req.params;
        const device = await Device.findOne({
            where: {id},
            //include: [{model: DeviceInfo, as: "info"}]
        });
        return res.json(device);
    }
}

const deviceController = new DeviceController;

export default deviceController;
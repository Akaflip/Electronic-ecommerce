var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import * as uuid from "uuid";
import { Device, DeviceInfo } from "../db/models/index.js";
export const __dirname = dirname(fileURLToPath(import.meta.url));
class DeviceController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, BrandId, TypeId, info } = req.body;
                const { img } = req.files;
                let fileName = uuid.v4() + '.png';
                const device = yield Device.create({ name, price, BrandId, TypeId, img: fileName });
                if (img) {
                    img.mv(path.resolve(__dirname, "..", "..", "static", fileName));
                }
                if (info) {
                    let newInfo = JSON.parse(info);
                    newInfo.forEach((e) => {
                        DeviceInfo.create({
                            title: e.title,
                            description: e.description,
                            deviceId: device.id
                        });
                    });
                }
                ;
                return res.json(device);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const device = yield Device.findOne({
                where: { id },
                //include: [{model: DeviceInfo, as: "info"}]
            });
            return res.json(device);
        });
    }
    ;
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { BrandId, TypeId, page, limit } = req.query;
            page = page || 1;
            limit = limit || 9;
            const offset = page * limit - limit;
            let devices;
            if (!TypeId && !BrandId)
                devices = yield Device.findAndCountAll({ limit, offset });
            else if (TypeId && !BrandId)
                devices = yield Device.findAndCountAll({ where: { TypeId }, limit, offset });
            else if (!TypeId && BrandId)
                devices = yield Device.findAndCountAll({ where: { BrandId }, limit, offset });
            else if (TypeId && BrandId)
                devices = yield Device.findAndCountAll({ where: { TypeId, BrandId }, limit, offset });
            return res.json(devices);
        });
    }
    ;
    removeOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const device = yield Device.findOne({
                where: { id },
                //include: [{model: DeviceInfo, as: "info"}]
            });
            return res.json(device);
        });
    }
}
const deviceController = new DeviceController;
export default deviceController;
//# sourceMappingURL=device.controller.js.map
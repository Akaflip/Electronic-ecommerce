var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Brand } from "../db/models/index.js";
import { apiError } from '../error/apiError.js';
class BrandController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.body;
            const brand = yield Brand.findOne({ where: name });
            if (brand) {
                return apiError.badRequest('такой brand уже существует');
            }
            ;
            const newBrand = yield Brand.create(name);
            return res.json(newBrand);
        });
    }
    ;
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const brands = yield Brand.findAll();
            return res.json(brands);
        });
    }
    ;
}
const brandController = new BrandController;
export default brandController;
//# sourceMappingURL=brand.controller.js.map
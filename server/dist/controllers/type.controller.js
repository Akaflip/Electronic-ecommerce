var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Type } from "../db/models/index.js";
import { apiError } from '../error/apiError.js';
class TypeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.body;
            const type = yield Type.findOne({ where: name });
            if (type) {
                return apiError.badRequest('такой type уже существует');
            }
            ;
            const newtype = yield Type.create(name);
            return res.json(newtype);
        });
    }
    ;
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield Type.findAll();
            return res.json(types);
        });
    }
    ;
}
const typeController = new TypeController;
export default typeController;
//# sourceMappingURL=type.controller.js.map
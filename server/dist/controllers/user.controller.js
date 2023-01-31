var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcrypt";
import { User } from '../db/models/index.js';
import { Basket } from '../db/models/index.js';
import jwt from 'jsonwebtoken';
import { apiError } from '../error/apiError.js';
function generateToken(id, email) {
    return jwt.sign({ id: id, email }, process.env.SECRET_KEY, { expiresIn: "24h" });
}
;
class UserController {
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { email, password } = req.body;
            if (!email || !password) {
                return next(apiError.badRequest('Неправильный пороль или email'));
            }
            ;
            const candidate = yield User.findOne({
                where: {
                    email: email
                }
            });
            console.log(candidate);
            if (candidate) {
                return next(apiError.badRequest('такой аккаунт уже существует'));
            }
            ;
            const hashPassword = yield bcrypt.hash(password, 5);
            const newUser = yield User.create({ email: email, password: hashPassword, });
            const basket = yield Basket.create(newUser.id);
            const token = generateToken(newUser.id, newUser.email);
            return res.json({ token });
        });
    }
    ;
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { email, password } = req.body;
            const user = yield User.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                return next(apiError.internal('неправильный пороль или email'));
            }
            ;
            let comparedPassword = bcrypt.compare(password, user.password);
            if (!comparedPassword) {
                return next(apiError.internal('неправильный пороль или email'));
            }
            ;
            const token = generateToken(user.id, user.email);
            return res.json({ token });
        });
    }
    ;
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = generateToken(req.body.id, req.body.email);
            return res.json({ token });
        });
    }
    ;
}
const userController = new UserController;
export default userController;
//# sourceMappingURL=user.controller.js.map
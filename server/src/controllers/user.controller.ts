import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcrypt";
import {User} from '../db/models/index.js';
import {Basket} from '../db/models/index.js';
import jwt from 'jsonwebtoken';
import { apiError } from '../error/apiError.js';



function generateToken( id: number, email: String,) {
    return jwt.sign(
        {id: id, email},
        process.env.SECRET_KEY,
        {expiresIn: "24h"}
    );
};

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        let {email, password} = req.body;

        if(!email || !password) {
            return next(apiError.badRequest('Неправильный пороль или email'));
        };

        const candidate = await User.findOne({
            where: {
                email: email
            }
        });
        console.log(candidate);

        if(candidate) {
            return next(apiError.badRequest('такой аккаунт уже существует'));
        };

        const hashPassword = await bcrypt.hash(password, 5);

        const newUser = await User.create({ email: email, password: hashPassword,});

        
        const basket = await Basket.create(newUser.id);

        const token = generateToken(newUser.id, newUser.email);
        return res.json({token});
    };

    async login(req: Request, res: Response, next: NextFunction) {
        let {email, password} = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if(!user) {
            return next(apiError.internal('неправильный пороль или email'));
        };

        let comparedPassword = bcrypt.compare(password, user.password);

        if(!comparedPassword) {
            return next(apiError.internal('неправильный пороль или email'));
        };

        const token = generateToken(user.id, user.email);
        return res.json({token});

    };

    async auth(req: Request, res: Response) {
        const token = generateToken(req.body.id, req.body.email);
        return res.json({token});
    };
}

const userController = new UserController;

export default userController;
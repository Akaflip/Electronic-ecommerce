import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.method == "OPTIONS") {
        next()
    };
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) {
            return res.status(403).json({message: "Не авторизован"});
        };
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // @ts-ignore
        req.user = decoded;
        next()
    } catch(e) {
        return res.status(403).json({message: "Не авторизован"});
    }
};
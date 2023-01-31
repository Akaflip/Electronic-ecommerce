import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { apiError } from "../error/apiError";

export const errorHandlingMiddleware = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof apiError) {
        return res.status(err.status).json({message: err.message});
    };
    return res.status(500).json({message: "Форс можор"});
};

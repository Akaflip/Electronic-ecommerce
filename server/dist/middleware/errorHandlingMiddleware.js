import { apiError } from "../error/apiError";
export const errorHandlingMiddleware = (err, req, res, next) => {
    if (err instanceof apiError) {
        return res.status(err.status).json({ message: err.message });
    }
    ;
    return res.status(500).json({ message: "Форс можор" });
};
//# sourceMappingURL=errorHandlingMiddleware.js.map
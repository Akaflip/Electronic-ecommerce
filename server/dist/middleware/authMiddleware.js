import jwt from "jsonwebtoken";
export const authMiddleware = (req, res, next) => {
    var _a;
    if (req.method == "OPTIONS") {
        next();
    }
    ;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(403).json({ message: "Не авторизован" });
        }
        ;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // @ts-ignore
        req.user = decoded;
        next();
    }
    catch (e) {
        return res.status(403).json({ message: "Не авторизован" });
    }
};
//# sourceMappingURL=authMiddleware.js.map
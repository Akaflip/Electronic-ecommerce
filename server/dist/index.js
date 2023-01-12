var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from 'cors';
import sequelizeConnection from "./db/config.js";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;
app.get('/', (req, res) => {
    return res.json('hello world');
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelizeConnection.authenticate();
        yield sequelizeConnection.sync();
        app.listen(PORT, () => {
            console.log(`hello world, port:${PORT}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
start();
//# sourceMappingURL=index.js.map
import {Express} from "express";
import fileUpload from "express-fileupload";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import sequelizeConnection from "./db/config.js";
import router from "./routes/index.js";

export const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static(path.resolve(__dirname, 'static')));


const PORT: number = 8000;

app.use('/api', router);

const start = async () => {
    try {
        await sequelizeConnection.authenticate();
        await sequelizeConnection.sync();
        app.listen(PORT, () => {
            console.log(`hello world, port:${PORT}`);
        });

    } catch(e) {
        console.log(e);
    }
};

start();



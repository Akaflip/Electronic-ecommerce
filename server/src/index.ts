import {Express, Request, Response} from "express";
import express from "express";
import cors from 'cors'
import sequelizeConnection from "./db/config.js";
import router from "./routes/index.js";


const app: Express = express();
app.use(express.json());
app.use(cors());
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



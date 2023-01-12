import {Express, Request, Response} from "express";
import express from "express";
import cors from 'cors'
import sequelizeConnection from "./db/config.js";


const app: Express = express();
app.use(express.json());
app.use(cors());
const PORT: number = 8000;

app.get('/', (req: Request, res: Response) => {
    return res.json('hello world')
});

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



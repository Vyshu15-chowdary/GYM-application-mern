import express from "express"
import {config}from "dotenv"
import cors from "cors"

const app = express();
const router = express.Router();

config({path: "./Config.env"});


app.use(cors) //useful to connect backend and frontend

app.listen(process.env.PORT,()=>{

    console.log(`server listening stport ${process.env.PORT}`)
});

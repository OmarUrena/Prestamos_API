import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes'
import clientRoutes from './routes/clientRoutes'
import bodyParser from "body-parser";
import {swaggerSpec, swaggerUi} from './swagger';
import "./jobs/moraJob"
dotenv.config();


const app = express();
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/client", clientRoutes);
app.use("/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000!")
})



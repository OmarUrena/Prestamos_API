import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes'
import clientRoutes from './routes/clientRoutes'
import bodyParser from "body-parser";
import {swaggerSpec, swaggerUi} from './swagger';
import cookieParser from 'cookie-parser';
import "./jobs/moraJob"
dotenv.config();


const app = express();
const corsOptions = {
  origin: function (origin: string | undefined, callback: (error: Error | null, success?: boolean) => void) {
    const allowedOrigins = ['http://localhost:3000', 'https://prestamos-api-nzhe.onrender.com']; // Lista de orígenes permitidos
    if (allowedOrigins.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(origin));
    }
  },

  credentials: true,

 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/client", clientRoutes);
app.use("/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000!")
})



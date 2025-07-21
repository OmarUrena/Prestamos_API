import cron from "node-cron"
import { PrismaClient } from "../generated/prisma";
import { actualizarCuotas } from "../controllers/services";

const prisma = new PrismaClient();






cron.schedule('0 0 * * *', async () => {
    
    actualizarCuotas()
    console.log("Ejecutando node Cron")

})

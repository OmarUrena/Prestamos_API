"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const prisma_1 = require("../generated/prisma");
const services_1 = require("../controllers/services");
const prisma = new prisma_1.PrismaClient();
node_cron_1.default.schedule('* * * * *', async () => {
    (0, services_1.actualizarCuotas)();
    console.log("Ejecutando node Cron");
});

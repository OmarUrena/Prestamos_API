"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuevoMovimiento = exports.obtenerMovimientos = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const obtenerMovimientos = async (req, res) => {
    const movimientos = await prisma.movimientoscaja.findMany();
    res.json(movimientos);
};
exports.obtenerMovimientos = obtenerMovimientos;
const nuevoMovimiento = async (req, res) => {
    const datos = req.body;
    try {
        const resultado = await prisma.movimientoscaja.create({
            data: {
                tipo: datos.tipo,
                prestamo_id: Number(datos.prestamo_id),
                pago_id: datos.pago_id,
                descripcion: datos.descripcion,
                monto: Number(datos.monto),
                fecha: datos.fecha,
                usuario_id: Number(datos.usuario_id)
            }
        });
        if (resultado) {
            res.status(200).send("Movimiento registrado correctamente!");
        }
        else {
            res.status(500).send("No se pudo registrar el movimiento");
        }
    }
    catch (e) {
        res.status(500).send(`Ha ocurrido un error: ${e}`);
    }
};
exports.nuevoMovimiento = nuevoMovimiento;

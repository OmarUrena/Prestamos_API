"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPagosPorFecha = exports.eliminarPago = exports.actualizarPago = exports.nuevoPago = exports.obtenerPago = exports.obtenerPagos = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/*Obtiene todos los pagos de la base de datos y los devuelve en formato JSON*/
const obtenerPagos = async (req, res) => {
    const pagos = await prisma.pagos.findMany();
    res.json(pagos);
};
exports.obtenerPagos = obtenerPagos;
/*Obtiene un pago por su id y lo devuelve en formato JSON*/
const obtenerPago = async (req, res) => {
    const id = Number(req.params["id"]);
    const pago = await prisma.pagos.findUnique({
        where: {
            id_pago: id
        }
    });
    if (pago) {
        res.status(200).json(pago);
    }
    res.status(404).send("Pago no encontrado");
};
exports.obtenerPago = obtenerPago;
/*Agrega un nuevo pago en la base de datos, actualiza el monto restante de la cuota y el estado de la misma
y devuelve un mensaje de éxito o error*/
const nuevoPago = async (req, res) => {
    const datos = req.body;
    try {
        const resultado = await prisma.pagos.create({
            data: {
                id_cuota: Number(datos.id_cuota),
                fecha_pago: datos.fecha_pago,
                monto_pagado: Number(datos.monto_pagado),
                forma_pago: datos.forma_pago,
                recibo_numero: Number(datos.recibo_numero),
                cobrador_id: Number(datos.cobrador_id),
                observaciones: datos.observaciones,
            }
        });
        if (resultado) {
            const cuota = await prisma.cuotas.findUnique({
                where: {
                    id_cuota: resultado.id_cuota
                }
            });
            let nuevoEstado = 'pendiente';
            if (cuota && cuota.monto_restante === resultado.monto_pagado) {
                nuevoEstado = 'pagada';
            }
            else if (cuota && cuota.estado_pago === 'atrasada') {
                nuevoEstado = 'atrasada';
            }
            await prisma.cuotas.update({
                where: {
                    id_cuota: resultado.id_cuota
                },
                data: {
                    monto_restante: {
                        decrement: resultado.monto_pagado
                    },
                    estado_pago: nuevoEstado,
                },
            });
            res.status(200).send("Pago registrado correctamente!");
        }
        else {
            res.status(500).send("No se pudo registrar el pago");
        }
    }
    catch (e) {
        res.status(500).send(`Ha ocurrido un error: ${e}`);
    }
};
exports.nuevoPago = nuevoPago;
/*Actualiza el numero de recibo de un pago por su id y devuelve un mensaje de éxito o error*/
const actualizarPago = async (req, res) => {
    const id = Number(req.params["id"]);
    const datos = req.body;
    const pago = await prisma.pagos.update({
        where: {
            id_pago: id
        },
        data: {
            recibo_numero: datos.recibo_numero,
        }
    });
};
exports.actualizarPago = actualizarPago;
/*Elimina un pago por su id y devuelve un mensaje de éxito o error, esta operacion NO SE USA*/
const eliminarPago = async (req, res) => {
    const id = Number(req.params["id"]);
    const pago = await prisma.pagos.delete({
        where: {
            id_pago: id
        }
    });
};
exports.eliminarPago = eliminarPago;
const obtenerPagosPorFecha = async (req, res) => {
    const { fecha } = req.query;
    const pagos = await prisma.pagos.findMany({
        where: {
            fecha_pago: new Date(fecha)
        }
    });
    res.json(pagos);
};
exports.obtenerPagosPorFecha = obtenerPagosPorFecha;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualizarCuotas = exports.nuevoPrestamo = exports.actualizarPrestamo = exports.eliminarPrestamo = exports.obtenerPagos = exports.obtenerCuotas = exports.obtenerPrestamo = exports.obtenerCuotasPendientes = exports.obtenerPrestamos = void 0;
const prisma_1 = require("../../generated/prisma");
const services_1 = require("../services");
const prisma = new prisma_1.PrismaClient();
const obtenerPrestamos = async (req, res) => {
    const prestamos = await prisma.prestamos.findMany({
        include: {
            cuotas: true
        }
    });
    res.json(prestamos);
};
exports.obtenerPrestamos = obtenerPrestamos;
const obtenerCuotasPendientes = async (req, res) => {
    const { fecha } = req.query;
    console.log(2);
    const cuotasPendientes = await prisma.cuotas.findMany({
        where: {
            fecha_prevista: new Date(fecha)
        },
        include: {
            prestamos: {
                include: {
                    clientes: {}
                }
            }
        }
    });
    if (cuotasPendientes.length > 0) {
        res.status(200).json(cuotasPendientes);
    }
    res.status(404).send("No hay cuotas pendientes para esa fecha");
};
exports.obtenerCuotasPendientes = obtenerCuotasPendientes;
const obtenerPrestamo = async (req, res) => {
    const id = Number(req.params["id"]);
    console.log(id);
    const prestamo = await prisma.prestamos.findUnique({
        where: {
            id_prestamo: id
        },
        include: {
            clientes: true,
            usuarios: true
        }
    });
    if (prestamo != null) {
        res.json(prestamo);
    }
    else {
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`);
    }
};
exports.obtenerPrestamo = obtenerPrestamo;
const obtenerCuotas = async (req, res) => {
    const id = Number(req.params["id"]);
    console.log(id);
    const prestamo = await prisma.prestamos.findUnique({
        where: {
            id_prestamo: id
        },
        include: {
            cuotas: {
                include: {
                    pagos: true
                }
            }
        }
    });
    if (prestamo != null) {
        res.json(prestamo?.cuotas);
    }
    else {
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`);
    }
};
exports.obtenerCuotas = obtenerCuotas;
const obtenerPagos = async (req, res) => {
    const id = Number(req.params["id"]);
    console.log(id);
    const prestamo = await prisma.prestamos.findUnique({
        where: {
            id_prestamo: id
        },
        include: {
            cuotas: {
                include: {
                    pagos: true
                }
            }
        }
    });
    if (prestamo != null) {
        let pagos = [];
        prestamo.cuotas.map((cuota) => {
            cuota.pagos.map((pago) => pagos.push(pago));
        });
        res.json(pagos);
    }
    else {
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`);
    }
};
exports.obtenerPagos = obtenerPagos;
const eliminarPrestamo = async (req, res) => {
    const id = Number(req.params['id']);
    const cuotas = await prisma.cuotas.deleteMany({
        where: {
            id_prestamo: id,
        }
    });
    const prestamo = await prisma.prestamos.delete({
        where: {
            id_prestamo: id
        }
    });
    res.json(prestamo);
};
exports.eliminarPrestamo = eliminarPrestamo;
const actualizarPrestamo = async (req, res) => {
    const id = Number(req.params['id']);
    const datos = req.body;
    const prestamo = await prisma.prestamos.update({
        where: {
            id_prestamo: id
        },
        data: {
            ...datos
        }
    });
    res.json(prestamo);
};
exports.actualizarPrestamo = actualizarPrestamo;
const nuevoPrestamo = async (req, res) => {
    const datos = req.body;
    try {
        const resultado = await prisma.prestamos.create({
            data: {
                id_cliente: Number(datos.id_cliente),
                monto: Number(datos.monto),
                interes: Number(datos.interes),
                id_usuario: Number(datos.id_usuario),
                cant_cuotas: Number(datos.cant_cuotas),
                frecuencia_pago: datos.frecuencia_pago,
                fecha_inicio: datos.fecha_inicio,
                fecha_vencimiento: datos.fecha_vencimiento,
            }
        });
        if (resultado) {
            const datos = (0, services_1.generarCuotasPrestamo)(resultado);
            const nuevasCuotas = await prisma.cuotas.createMany({
                data: datos.nuevasCuotas
            });
            console.log(Array.isArray(datos.nuevasCuotas));
            if (nuevasCuotas) {
                const actualizado = await prisma.prestamos.update({
                    where: {
                        id_prestamo: resultado.id_prestamo
                    },
                    data: {
                        fecha_vencimiento: datos.nuevasCuotas[resultado.cant_cuotas - 1].fecha_prevista
                    }
                });
                res.json({ actualizado, nuevasCuotas });
            }
        }
        else {
            res.status(500).send("No se pudo generar el prestamo");
        }
    }
    catch (e) {
        res.status(500).send(`Ha ocurrido un error: ${e}`);
    }
};
exports.nuevoPrestamo = nuevoPrestamo;
const visualizarCuotas = async (req, res) => {
    const datos = req.body;
    const cuotas = (0, services_1.generarCuotasReferencia)(datos.interes, datos.monto, datos.fecha_inicio, datos.frecuencia_pago, datos.tipo_interes, datos.cant_cuotas);
    res.status(201).send(cuotas);
};
exports.visualizarCuotas = visualizarCuotas;

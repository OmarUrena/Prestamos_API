"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCliente = exports.actualizarCliente = exports.nuevoCliente = exports.obtenerCliente = exports.obtenerClientes = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const obtenerClientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany({
        include: {
            prestamos: true
        }
    });
    res.json(clientes);
};
exports.obtenerClientes = obtenerClientes;
const obtenerCliente = async (req, res) => {
    const id = Number(req.params["id"]);
    const cliente = await prisma.clientes.findUnique({
        where: {
            id_cliente: id
        },
        include: {
            prestamos: true
        }
    });
    if (cliente != null) {
        res.json(cliente);
    }
    else {
        res.status(404).send(`No se encontró el cliente con el id: ${id}`);
    }
};
exports.obtenerCliente = obtenerCliente;
const nuevoCliente = async (req, res) => {
    const datos = req.body;
    console.log(datos);
    try {
        const resultado = await prisma.clientes.create({
            data: {
                nombre: datos.nombre,
                cedula: datos.cedula,
                telefono: datos.telefono,
                email: datos.email,
                direccion: datos.direccion,
                foto_url: datos.foto_url,
                notas: datos.notas,
                referido_por: datos.referido_por
            }
        });
        if (resultado) {
            res.status(200).send("Cliente agregado correctamente!");
        }
        else {
            res.status(500).send("No se pudo agregar el cliente");
        }
    }
    catch (e) {
        res.status(500).send(`Ha ocurrido un error: ${e}`);
    }
};
exports.nuevoCliente = nuevoCliente;
const actualizarCliente = async (req, res) => {
    const id = Number(req.params['id']);
    const datos = req.body;
    const cliente = await prisma.clientes.update({
        where: {
            id_cliente: id
        },
        data: {
            ...datos
        }
    });
    res.json(cliente);
};
exports.actualizarCliente = actualizarCliente;
const eliminarCliente = async (req, res) => {
    const id = Number(req.params['id']);
    const prestamos = await prisma.prestamos.deleteMany({
        where: {
            id_cliente: id,
        }
    });
    const cliente = await prisma.clientes.delete({
        where: {
            id_cliente: id
        }
    });
    res.json(cliente);
};
exports.eliminarCliente = eliminarCliente;

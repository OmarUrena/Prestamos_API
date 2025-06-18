"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarUsuario = exports.activarUsuario = exports.desactivarUsuario = exports.obtenerUsuarios = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const obtenerUsuarios = async (req, res) => {
    const usuarios = await prisma.usuarios.findMany();
    if (usuarios.length > 0) {
        res.status(200).json(usuarios);
    }
    else {
        res.status(404).json({
            message: "No se encontraron usuarios"
        });
    }
};
exports.obtenerUsuarios = obtenerUsuarios;
const desactivarUsuario = async (req, res) => {
    const id = Number(req.params["id"]);
    const razon_baja = req.body.razon_baja;
    try {
        const usuario = await prisma.usuarios.update({
            where: {
                id_usuario: id
            },
            data: {
                estado: 'inactivo',
                razon_baja: razon_baja,
                fecha_baja: new Date()
            }
        });
        if (usuario) {
            res.status(200).json({ message: "Usuario desactivado correctamente" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error al desactivar el usuario: " + error });
    }
};
exports.desactivarUsuario = desactivarUsuario;
const activarUsuario = async (req, res) => {
    const id = Number(req.params["id"]);
    try {
        const usuario = await prisma.usuarios.update({
            where: {
                id_usuario: id
            },
            data: {
                estado: 'activo',
            }
        });
        if (usuario) {
            res.status(200).json({ message: "Usuario activado correctamente" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error al activar el usuario: " + error });
    }
};
exports.activarUsuario = activarUsuario;
const actualizarUsuario = async (req, res) => {
    const id = Number(req.params["id"]);
    const { clave_hash, rol } = req.body;
    try {
        const usuario = await prisma.usuarios.update({
            where: {
                id_usuario: id
            },
            data: {
                clave_hash: clave_hash,
                rol: rol,
            }
        });
        res.status(200).json(usuario);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario: " + error });
    }
};
exports.actualizarUsuario = actualizarUsuario;

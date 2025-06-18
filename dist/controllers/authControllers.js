"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const register = async (req, res) => {
    const { nombre_usuario, clave_hash, rol } = req.body;
    try {
        const usuarioExistente = await prisma.usuarios.findUnique({
            where: {
                nombre_usuario: nombre_usuario
            }
        });
        if (usuarioExistente) {
            res.status(400).json({ message: "El nombre de usuario ya está en uso" });
        }
        const nuevoUsuario = await prisma.usuarios.create({
            data: {
                nombre_usuario: nombre_usuario,
                clave_hash: clave_hash,
                rol: rol,
                fecha_creacion: new Date(),
                estado: 'activo'
            }
        });
        res.status(201).json({
            meessage: "Usuario registrado exitosamente",
            usuario: {
                id_usuario: nuevoUsuario.id_usuario,
                nombre_usuario: nuevoUsuario.nombre_usuario,
                rol: nuevoUsuario.rol
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario: " + error });
    }
};
exports.register = register;
/* Conrolador de login que verifica las credenciales del usuario*/
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.usuarios.findUnique({
            where: {
                nombre_usuario: username
            }
        });
        if (user && user.estado != 'activo') {
            res.status(403).send("El usuario esta desactivado o no existe");
        }
        else if (user && user.clave_hash === password) {
            await prisma.usuarios.update({
                where: {
                    id_usuario: user.id_usuario
                },
                data: {
                    ultimo_acceso: new Date()
                }
            });
            res.status(200).json({
                message: "Login successful",
                user: user
            });
        }
        else {
            res.status(401).send("Invalid credentials");
        }
    }
    catch (error) {
        res.status(500).send('Ocurrio un error al intentar iniciar sesion: ' + error);
    }
};
exports.login = login;

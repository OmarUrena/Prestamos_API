import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { verificarToken } from "../services";


const prisma = new PrismaClient();

export const obtenerUsuarios = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin"]);
        if (verificacion && verificacion?.statusCode != 200) {
            res.status(verificacion?.statusCode).send(verificacion?.statusMessage);
    
        }

    const usuarios = await prisma.usuarios.findMany()

    if(usuarios.length > 0) {
        res.status(200).json(usuarios);
    }
    else{
        res.status(404).json({
            message: "No se encontraron usuarios"
        })
    }
}


export const desactivarUsuario = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])
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
        })

        if(usuario){
            res.status(200).json({message: "Usuario desactivado correctamente"})
        }
        
    }
    catch (error) {
        res.status(500).json({message: "Error al desactivar el usuario: " + error})
    }
}

export const activarUsuario = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])
    

    try {
        const usuario = await prisma.usuarios.update({
            where: {
                id_usuario: id
            },

            data: {
                estado: 'activo',
                
            }
        })

        if(usuario){
            res.status(200).json({message: "Usuario activado correctamente"})
        }
        
    }
    catch (error) {
        res.status(500).json({message: "Error al activar el usuario: " + error})
    }
}



export const actualizarUsuario = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])
    const {clave_hash, rol} = req.body;

    try {
        const usuario = await prisma.usuarios.update({
            where: {
                id_usuario: id
            },
            data: {
                clave_hash: clave_hash,
                rol: rol,
               
            }
        })

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({message: "Error al actualizar el usuario: " + error})
    }
}
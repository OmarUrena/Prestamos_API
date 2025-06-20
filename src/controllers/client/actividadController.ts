import { logactividad, PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { verificarToken } from "../services";
const prisma = new PrismaClient();

type ActividadInput = {
    accion: string;
    id_usuario: number;
    fecha_hora: Date;
}
export const registrarActividad = async (req: Request, res: Response) => {
    try {
        const actividad = req.body as ActividadInput;
        const nuevaActividad = await prisma.logactividad.create({
            data: {
               accion: actividad.accion,
               id_usuario: actividad.id_usuario,
               fecha_hora: actividad.fecha_hora,
            }
        });
        res.status(201).json(nuevaActividad);
    } catch (error) {
        console.error("Error al registrar actividad:", error);
        res.status(500).json({ error: "No se pudo registrar la actividad" });
    }
}


export const obtenerActividades = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin"]);
        if (verificacion && verificacion?.statusCode != 200) {
            res.status(verificacion?.statusCode).send(verificacion?.statusMessage);
    
        }
    try {
        const actividades = await prisma.logactividad.findMany({
            orderBy: {
                fecha_hora: 'desc'
            }
        });
        res.status(200).json(actividades);
    } catch (error) {
        console.error("Error al obtener actividades:", error);
        res.status(500).json({ error: "No se pudieron obtener las actividades" });
    }
}


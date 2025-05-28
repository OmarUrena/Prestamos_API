import { Request, Response } from "express";
import { movimientoscaja, PrismaClient } from "../../generated/prisma";


const prisma = new PrismaClient()

export const obtenerMovimientos = async (req: Request, res: Response) => {
    const movimientos = await prisma.movimientoscaja.findMany()

    res.json(movimientos)
}

export const nuevoMovimiento = async (req: Request, res: Response) => {
    const datos: movimientoscaja = req.body
    try{
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
    })

    if(resultado){
            res.status(200).send("Movimiento registrado correctamente!")
        }
        else{
            res.status(500).send("No se pudo registrar el movimiento")
        }
     
     }
        catch(e){
            res.status(500).send(`Ha ocurrido un error: ${e}`)
        }
   



    
}




    








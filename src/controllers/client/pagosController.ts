import { Request, Response } from "express";
import { pagos, PrismaClient } from "../../generated/prisma";


const prisma = new PrismaClient()



export const obtenerPagos = async (req: Request, res: Response) => {
    const pagos = await prisma.pagos.findMany()

    res.json(pagos)
}


export const obtenerPago = async (req: Request, res: Response) => {
    const id = Number(req.params["id"])
    const pago = await prisma.pagos.findUnique({
        where: {
            id_pago : id
        }
    })
}


export const nuevoPago = async (req: Request, res: Response) => {
    const datos : pagos = req.body
    
        
        
    
        
        try{
            const resultado = await prisma.pagos.create({
            data: {
                id_cuota: Number(datos.id_cuota),
                fecha_pago: datos.fecha_pago,
                monto_pagado: Number(datos.monto_pagado),
                forma_pago: datos.forma_pago,
                recibo_numero: Number(datos.recibo_numero),
                cobrador_id: Number(datos.cobrador_id),
                observaciones: datos.observaciones
    
    
                
            }
   
        
        })
    
        if(resultado){
            res.status(200).send("Pago registrado correctamente!")
        }
        else{
            res.status(500).send("No se pudo registrar el pago")
        }
        }
    
        catch(e){
            res.status(500).send(`Ha ocurrido un error: ${e}`)
        }
        
    
}

export const actualizarPago = async (req: Request, res: Response) => {
    const id = Number(req.params["id"])
    const datos: pagos = req.body

    const pago = await prisma.pagos.update({
        where: {
            id_pago: id
        },
        data: {
            recibo_numero: datos.recibo_numero,


        }
    })

}

export const eliminarPago = async (req: Request, res: Response) => {
    const id = Number(req.params["id"])

    const pago = await prisma.pagos.delete({
        where: {
            id_pago: id
        }
    })
}
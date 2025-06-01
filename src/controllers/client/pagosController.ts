import { Request, Response } from "express";
import { estado_cuota, pagos, PrismaClient } from "../../generated/prisma";


const prisma = new PrismaClient()


/*Obtiene todos los pagos de la base de datos y los devuelve en formato JSON*/
export const obtenerPagos = async (req: Request, res: Response) => {
    const pagos = await prisma.pagos.findMany()

    res.json(pagos)
}

/*Obtiene un pago por su id y lo devuelve en formato JSON*/
export const obtenerPago = async (req: Request, res: Response) => {
    const id = Number(req.params["id"])
    const pago = await prisma.pagos.findUnique({
        where: {
            id_pago : id
        }
    })
}


/*Agrega un nuevo pago en la base de datos, actualiza el monto restante de la cuota y el estado de la misma
y devuelve un mensaje de éxito o error*/
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
                observaciones: datos.observaciones,  
                
            }

                 
        })
    
        if(resultado){

            const cuota = await prisma.cuotas.findUnique({
                where: {
                    id_cuota: resultado.id_cuota
                }
            })

            let nuevoEstado : estado_cuota = 'pendiente'

            if(cuota && cuota.monto_restante === resultado.monto_pagado){
                nuevoEstado = 'pagada'
            }
            else if(cuota && cuota.estado_pago === 'atrasada'){
                nuevoEstado = 'atrasada'
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
                
            })


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


/*Actualiza el numero de recibo de un pago por su id y devuelve un mensaje de éxito o error*/
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

/*Elimina un pago por su id y devuelve un mensaje de éxito o error, esta operacion NO SE USA*/
export const eliminarPago = async (req: Request, res: Response) => {
    const id = Number(req.params["id"])

    const pago = await prisma.pagos.delete({
        where: {
            id_pago: id
        }
    })
}
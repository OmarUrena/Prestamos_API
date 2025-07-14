import { Request, Response } from "express";
import { estado_cuota, pagos, PrismaClient } from "../../generated/prisma";
import { actualizarPrestamos, verificarToken } from "../services";


const prisma = new PrismaClient()


/*Obtiene todos los pagos de la base de datos y los devuelve en formato JSON*/
export const obtenerPagos = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "cobrador", "agente"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const pagos = await prisma.pagos.findMany()

    res.json(pagos)
}

/*Obtiene un pago por su id y lo devuelve en formato JSON*/
export const obtenerPago = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "cobrador", "agente"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])
    const pago = await prisma.pagos.findUnique({
        where: {
            id_pago : id
        }
    })

    if(pago){
        res.status(200).json(pago)
    }
    res.status(404).send("Pago no encontrado")
}




/*Agrega un nuevo pago en la base de datos, actualiza el monto restante de la cuota y el estado de la misma
y devuelve un mensaje de éxito o error*/
export const nuevoPago = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "cobrador"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
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

            var nuevoEstado : estado_cuota = 'pendiente'
            console.log(cuota?.monto_restante, resultado.monto_pagado)
            if(cuota?.monto_restante.equals(resultado.monto_pagado)){
                console.log('actualizando cuota')
                nuevoEstado = 'pagada'
            }
            else if(cuota && cuota.estado_pago === 'atrasada'){
                nuevoEstado = 'atrasada'
            }

            console.log(nuevoEstado)

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

            await actualizarPrestamos();


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
    const verificacion = await verificarToken(req, res, ["admin", "cobrador"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
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
    const verificacion = await verificarToken(req, res, ["admin"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])

    const pago = await prisma.pagos.delete({
        where: {
            id_pago: id
        }
    })
}



export const obtenerPagosPorFecha = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const {fecha} = req.query;

    const pagos = await prisma.pagos.findMany({
        where: {
            fecha_pago: new Date(fecha as string)
        }
    })

    res.json(pagos)


}
import { pagos, prestamos, PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";


const prisma = new PrismaClient()


export const obtenerPrestamos = async (req: Request, res: Response) => {
    const prestamos = await prisma.prestamos.findMany({
        include: {
            cuotas : true
        }
    })
    res.json(prestamos)
}


export const obtenerPrestamo = async (req: Request, res: Response) => {
    const id =Number(req.params["id"])
    console.log(id)
    const prestamo = await prisma.prestamos.findUnique({
        where: {
            id_prestamo: id
        },
        include: {
            clientes: true,
            usuarios: true
        }
    })

    if(prestamo != null){
        res.json(prestamo)
    }
    else{
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`)
    }
}

export const obtenerCuotas = async (req: Request, res: Response) => {
    const id = Number(req.params["id"])
    console.log(id)
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


    })

    if(prestamo != null){
        res.json(prestamo?.cuotas)
    }
    else{
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`)
    }

    
}

export const obtenerPagos = async (req: Request, res: Response) => {
    const id = Number(req.params["id"])
    console.log(id)
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


    })

    if(prestamo != null){
        let pagos : pagos[] = []
        prestamo.cuotas.map((cuota) => {
            cuota.pagos.map((pago) => pagos.push(pago))
        })
        res.json(pagos)
    }
    else{
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`)
    }

    
}


export const eliminarPrestamo = async (req: Request, res: Response) => {
    const id = Number(req.params['id'])

    const cuotas = await prisma.cuotas.deleteMany({
        where: {
            id_prestamo: id,
        }
    })
    const prestamo = await prisma.prestamos.delete({
        where: {
            id_prestamo : id
        }
    }
        
    )

    res.json(prestamo)
}


export const actualizarPrestamo = async (req: Request, res: Response) => {
    const id = Number(req.params['id'])
    const datos = req.body
    const prestamo = await prisma.prestamos.update({
        where: {
            id_prestamo: id
        },
        data: {
            ...datos
        }
    })

    res.json(prestamo)
}



export const nuevoPrestamo = async (req: Request, res: Response) => {
    const datos : prestamos = req.body

    
    console.log(datos)

    
    try{
        const resultado = await prisma.prestamos.create({
        data: {
            id_cliente: Number(datos.id_cliente),
            monto: Number(datos.monto),
            interes: Number(datos.interes),
            id_usuario: Number (datos.id_usuario),
            cant_cuotas: Number (datos.cant_cuotas),
            frecuencia_pago: datos.frecuencia_pago,
            fecha_inicio: datos.fecha_inicio,
            fecha_vencimiento: datos.fecha_vencimiento,
            
        }

    
    })

    if(resultado){
        res.status(200).send("Prestamo generado correctamente!")
    }
    else{
        res.status(500).send("No se pudo generar el prestamo")
    }
    }

    catch(e){
        res.status(500).send(`Ha ocurrido un error: ${e}`)
    }
    

}
import { cuotas, frecuencia_pago, pagos, prestamos, PrismaClient, tipo_interes } from "../../generated/prisma";
import { Decimal } from "../../generated/prisma/runtime/library";
import { generarCuotasPrestamo, generarCuotasReferencia } from "../services";
import { ADDRGETNETWORKPARAMS } from "dns";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { verificarToken } from "../services";


const prisma = new PrismaClient()




export const obtenerPrestamos = async (req: Request, res: Response) => {

    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const prestamos = await prisma.prestamos.findMany({
        include: {
            clientes: true
        },
        orderBy:{
            fecha_inicio: "desc"
        }
    })

    const serialized = prestamos.map((prestamo) => {
        return {
            ...prestamo,
            monto: prestamo.monto.toNumber(),
        }
    })
    res.json(serialized)
}


export const obtenerCuotasPendientes = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const { fecha } = req.query;
    const cuotasPendientes = await prisma.cuotas.findMany({
        where: {
            fecha_prevista: new Date(fecha as string)
        },

        orderBy:{
            id_prestamo: "asc"
        },

        include: {
            prestamos: {
                include: {
                    clientes: true
                }
            }
        }
    })

    if (cuotasPendientes.length > 0) {
        res.status(200).json(cuotasPendientes)
    }
    res.status(404).send("No hay cuotas pendientes para esa fecha")
}



export const obtenerPrestamo = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);
    }
    const id = Number(req.params["id"])
    const prestamo = await prisma.prestamos.findUnique({
        where: {
            id_prestamo: id
        },
        include: {
            clientes: true,
            usuarios: true,
            cuotas: {
                orderBy: {
                    numero: "asc"
                },
                include: {
                    pagos: {
                        orderBy: {
                            fecha_pago: "desc"
                        }
                    }
                }
            }
        }
    })

    if (prestamo != null) {
        const serialized = {
            ...prestamo,
            monto: prestamo.monto.toNumber()
        }
        res.json(serialized)
    }
    else {
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`)
    }
}

export const obtenerCuotas = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])
    const prestamo = await prisma.prestamos.findUnique({
        where: {
            id_prestamo: id
        },
        include: {
            cuotas: {
                include: {
                    pagos: true
                },
                orderBy:{
                    numero: "asc"
                }
            }

        }


    })

    if (prestamo != null) {
        res.json(prestamo?.cuotas)
    }
    else {
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`)
    }


}

export const obtenerPagos = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])
    const prestamo = await prisma.prestamos.findUnique({
        where: {
            id_prestamo: id
        },
        include: {
            cuotas: {
                orderBy:{
                    numero: "asc"
                },
                include: {

                    pagos: {
                        orderBy: {
                            fecha_pago: "desc"
                        }
                    }
                }
            }

        }


    })

    if (prestamo != null) {
        let pagos: pagos[] = []
        prestamo.cuotas.map((cuota) => {
            cuota.pagos.map((pago) => pagos.push(pago))
        })
        res.json(pagos)
    }
    else {
        res.status(404).send(`No se encontró el préstamo con el id: ${id}`)
    }


}


export const eliminarPrestamo = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params['id'])

    const cuotas = await prisma.cuotas.deleteMany({
        where: {
            id_prestamo: id,
        }
    })
    const prestamo = await prisma.prestamos.delete({
        where: {
            id_prestamo: id
        }
    }

    )

    res.json(prestamo)
}


export const actualizarPrestamo = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
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
    
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const datos: prestamos = req.body





    try {
        const resultado = await prisma.prestamos.create({
            data: {
                id_cliente: Number(datos.id_cliente),
                monto: Number(datos.monto),
                interes: Number(datos.interes),
                id_usuario: Number(datos.id_usuario),
                cant_cuotas: Number(datos.cant_cuotas),
                frecuencia_pago: datos.frecuencia_pago,
                fecha_inicio: datos.fecha_inicio,
                fecha_vencimiento: datos.fecha_vencimiento,

            }


        })

        if (resultado) {


            const datos = generarCuotasPrestamo(resultado);

            const nuevasCuotas = await prisma.cuotas.createMany({
                data: datos.nuevasCuotas
            })

            console.log(Array.isArray(datos.nuevasCuotas))

            if (nuevasCuotas) {
                const actualizado = await prisma.prestamos.update({
                    where: {
                        id_prestamo: resultado.id_prestamo
                    },
                    data: {
                        fecha_vencimiento: datos.nuevasCuotas[resultado.cant_cuotas - 1].fecha_prevista
                    }
                })

                res.status(201).json({ actualizado, nuevasCuotas })
            }


        }
        else {
            res.status(500).send("No se pudo generar el prestamo")
        }
    }

    catch (e) {
        res.status(500).send(`Ha ocurrido un error: ${e}`)
    }


}

export const visualizarCuotas = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const datos = req.body

    const cuotas = generarCuotasReferencia(datos.interes, datos.monto, datos.fecha_inicio, datos.frecuencia_pago, datos.tipo_interes, datos.cant_cuotas)
    res.status(201).send(cuotas)


}


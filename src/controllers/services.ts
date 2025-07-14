import { Decimal } from "@prisma/client/runtime/library"
import { prestamos, PrismaClient } from "../generated/prisma"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()



//Devuelve los intereses de la Mora, en base al monto, la tasa de interes y los días transcurridos
const calcularMora = (monto: number, interes: number, dias: number) => {
    const mora: Number = monto * interes * dias / 360
    return mora
}


/* Verifica las cuotas atrasadas y las actualiza agregando los intereses, los montos restantes,
el estado y la fecha de actualización */
export const actualizarCuotas = async () => {
    const date = new Date();
    const cuotas = await prisma.cuotas.findMany({
        where: {
            AND: [
                {
                    fecha_prevista: {
                        lt: date
                    }
                },

                {
                    estado_pago: {
                        not: 'pagada'
                    }
                }
            ]

        }
    })


    for (const cuota of cuotas) {
        const diasMora = Math.floor((date.getTime() - cuota.fecha_prevista.getTime()) / (1000 * 60 * 60 * 24));
        if (diasMora > 0) {
            const mora = Number(calcularMora(Number(cuota.monto), 0.18, diasMora))
            
            const agregarPendiente = mora - Number(cuota.intereses_mora)

            await prisma.cuotas.update({
                where: {
                    id_cuota: cuota.id_cuota
                },
                data: {
                    prestamos: {
                        update: {
                            where: { id_prestamo: cuota.id_prestamo },
                            data: { estado: 'mora' }
                        }
                    },
                    estado_pago: 'atrasada',
                    intereses_mora: Decimal(mora),
                    monto_restante: {
                        increment: Decimal(agregarPendiente)
                    },
                    fecha_actualizacion: date
                }
            })


        }
    }


}


export const actualizarPrestamos = async () => {
    const prestamos = await prisma.prestamos.findMany({
        where: {
            estado: 'mora'
        },
        include:{
            cuotas:{
                where:{
                    estado_pago: 'atrasada'
                }
            }
        }
    })


    for(const prestamo of prestamos){
        if(prestamo.cuotas.length === 0){
            await prisma.prestamos.update({
                where: {
                    id_prestamo: prestamo.id_prestamo
                },
                data: {
                    estado: 'activo'
                }
            })
        }
    }
}



/*Genera todas las cuotas de un préstamo, calculando las cuotas, el abono al capital el abono a los intereses
y la fecha pautada para pagar cada una. Devuelve el monto de las cuotas y la lista de cuotas*/
export const generarCuotasPrestamo = (prestamo: prestamos) => {
    const nuevasCuotas = []
    let cuota = 0
    let interval = 0
    let interes = Number(prestamo.interes)
    let montoRestante = Number(prestamo.monto)
    let montoPrestamo = Number(prestamo.monto)
    let fecha: Date = prestamo.fecha_inicio
    switch (prestamo.frecuencia_pago) {
        case 'mensual':
            interes = interes / 12
            interval = 30
            break;

        case 'quincenal':
            interes = interes / 26
            interval = 14
            break;

        case 'semanal':
            interes = interes / 52
            interval = 7
            break;

        default:
            interes = interes / 360
            interval = 1
            break;
    }

    if (prestamo.tipo_interes === 'simple') {
        cuota = (Number(prestamo.monto) * (1 + (interes * prestamo.cant_cuotas))) / prestamo.cant_cuotas;
    } else {
        cuota = Number(prestamo.monto) * interes * ((1 + interes) ** prestamo.cant_cuotas) / ((1 + interes) ** (prestamo.cant_cuotas) - 1)
    }


    for (let index = 0; index < prestamo.cant_cuotas; index++) {
        const montoInteres = montoRestante * interes
        const montoCapital = cuota - montoInteres
        montoRestante = montoRestante - montoCapital


        fecha.setDate(fecha.getDate() + interval)

        let fecha1 = new Date(fecha)
        const nuevaCuota = {
            id_prestamo: prestamo.id_prestamo,
            monto: Decimal(cuota),
            numero: index + 1,
            fecha_prevista: fecha1,
            monto_capital: Decimal(montoCapital),
            monto_interes: Decimal(montoInteres),
            monto_restante: Decimal(cuota),
            fecha_actualizacion: new Date()



        }



        nuevasCuotas.push(nuevaCuota)

    }



    return {
        cuota: cuota,
        nuevasCuotas
    }
}

export const generarCuotasReferencia = (interes: number, monto: number, fecha: Date, frecuencia_pago: string, tipo_interes: string, cant_cuotas: number) => {
    const nuevasCuotas = []
    let cuota = 0
    let interval = 0
    let montoRestante = monto
    fecha = new Date(fecha)
    console.log(frecuencia_pago)
    switch (frecuencia_pago) {
        case 'mensual':
            interes = interes / 12
            interval = 30
            break;

        case 'quincenal':
            interes = interes / 26
            interval = 14
            break;

        case 'semanal':
            interes = interes / 52
            interval = 7
            break;

        default:
            interes = interes / 360
            interval = 1
            break;
    }

    if (tipo_interes === 'simple') {
        cuota = (Number(monto) * (1 + (interes * cant_cuotas))) / cant_cuotas;
    } else {
        cuota = Number(monto) * interes * ((1 + interes) ** cant_cuotas) / ((1 + interes) ** (cant_cuotas) - 1)
    }


    for (let index = 0; index < cant_cuotas; index++) {
        const montoInteres = montoRestante * interes
        const montoCapital = cuota - montoInteres
        montoRestante = montoRestante - montoCapital


        fecha.setDate(fecha.getDate() + interval)

        let fecha1 = new Date(fecha)
        const nuevaCuota = {
            monto: cuota,
            numero: index + 1,
            fecha_prevista: fecha1,
            monto_capital: montoCapital,
            monto_interes: montoInteres,
            monto_restante: montoRestante,



        }



        nuevasCuotas.push(nuevaCuota)

    }



    return {
        cuota: cuota,
        nuevasCuotas
    }
}

export const verificarToken = async (req: Request, res: Response, roles: string[]) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return { statusCode: 401, statusMessage: "No se ha proporcionado un token de autorización" };
    }

    // Now token is guaranteed to be a string.

    try {
        const user = await new Promise<any>((resolve, reject) => {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, async (err: any, user: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(user);
                }
    
            });
        })
    
        if (user && !roles.includes(user.rol)) {
            return { statusCode: 403, statusMessage: "No tienes permisos para acceder a esta ruta" };
    
        }
    
        return { statusCode: 200, statusMessage: "Token verificado correctamente", user: user };
    } catch (error) {
        return { statusCode: 401, statusMessage: "Token no válido" };
    }

}






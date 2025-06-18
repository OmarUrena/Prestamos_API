"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarCuotasReferencia = exports.generarCuotasPrestamo = exports.actualizarCuotas = void 0;
const library_1 = require("@prisma/client/runtime/library");
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
//Devuelve los intereses de la Mora, en base al monto, la tasa de interes y los días transcurridos
const calcularMora = (monto, interes, dias) => {
    const mora = monto * interes * dias / 360;
    return mora;
};
/* Verifica las cuotas atrasadas y las actualiza agregando los intereses, los montos restantes,
el estado y la fecha de actualización */
const actualizarCuotas = async () => {
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
    });
    for (const cuota of cuotas) {
        const diasMora = Math.floor((date.getTime() - cuota.fecha_prevista.getTime()) / (1000 * 60 * 60 * 24));
        if (diasMora > 0) {
            const mora = Number(calcularMora(Number(cuota.monto), 0.18, diasMora));
            console.log(mora);
            const agregarPendiente = mora - Number(cuota.intereses_mora);
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
                    intereses_mora: (0, library_1.Decimal)(mora),
                    monto_restante: {
                        increment: (0, library_1.Decimal)(agregarPendiente)
                    },
                    fecha_actualizacion: date
                }
            });
        }
    }
};
exports.actualizarCuotas = actualizarCuotas;
/*Genera todas las cuotas de un préstamo, calculando las cuotas, el abono al capital el abono a los intereses
y la fecha pautada para pagar cada una. Devuelve el monto de las cuotas y la lista de cuotas*/
const generarCuotasPrestamo = (prestamo) => {
    const nuevasCuotas = [];
    let cuota = 0;
    let interval = 0;
    let interes = Number(prestamo.interes);
    let montoRestante = Number(prestamo.monto);
    let fecha = prestamo.fecha_inicio;
    switch (prestamo.frecuencia_pago) {
        case 'mensual':
            interes = interes / 12;
            interval = 30;
            break;
        case 'quincenal':
            interes = interes / 26;
            interval = 14;
            break;
        case 'semanal':
            interes = interes / 52;
            interval = 7;
            break;
        default:
            interes = interes / 360;
            interval = 1;
            break;
    }
    if (prestamo.tipo_interes === 'simple') {
        cuota = (Number(prestamo.monto) * (1 + (interes * prestamo.cant_cuotas))) / prestamo.cant_cuotas;
    }
    else {
        cuota = Number(prestamo.monto) * interes * ((1 + interes) ** prestamo.cant_cuotas) / ((1 + interes) ** (prestamo.cant_cuotas) - 1);
    }
    for (let index = 0; index < prestamo.cant_cuotas; index++) {
        const montoInteres = montoRestante * interes;
        const montoCapital = cuota - montoInteres;
        montoRestante = montoRestante - montoCapital;
        fecha.setDate(fecha.getDate() + interval);
        let fecha1 = new Date(fecha);
        const nuevaCuota = {
            id_prestamo: prestamo.id_prestamo,
            monto: (0, library_1.Decimal)(cuota),
            numero: index + 1,
            fecha_prevista: fecha1,
            monto_capital: (0, library_1.Decimal)(montoCapital),
            monto_interes: (0, library_1.Decimal)(montoInteres),
            monto_restante: (0, library_1.Decimal)(cuota),
            fecha_actualizacion: new Date()
        };
        nuevasCuotas.push(nuevaCuota);
    }
    return {
        cuota: cuota,
        nuevasCuotas
    };
};
exports.generarCuotasPrestamo = generarCuotasPrestamo;
const generarCuotasReferencia = (interes, monto, fecha, frecuencia_pago, tipo_interes, cant_cuotas) => {
    const nuevasCuotas = [];
    let cuota = 0;
    let interval = 0;
    let montoRestante = monto;
    fecha = new Date(fecha);
    console.log(frecuencia_pago);
    switch (frecuencia_pago) {
        case 'mensual':
            interes = interes / 12;
            interval = 30;
            break;
        case 'quincenal':
            interes = interes / 26;
            interval = 14;
            break;
        case 'semanal':
            interes = interes / 52;
            interval = 7;
            break;
        default:
            interes = interes / 360;
            interval = 1;
            break;
    }
    if (tipo_interes === 'simple') {
        cuota = (Number(monto) * (1 + (interes * cant_cuotas))) / cant_cuotas;
    }
    else {
        cuota = Number(monto) * interes * ((1 + interes) ** cant_cuotas) / ((1 + interes) ** (cant_cuotas) - 1);
    }
    for (let index = 0; index < cant_cuotas; index++) {
        const montoInteres = montoRestante * interes;
        const montoCapital = cuota - montoInteres;
        montoRestante = montoRestante - montoCapital;
        fecha.setDate(fecha.getDate() + interval);
        let fecha1 = new Date(fecha);
        const nuevaCuota = {
            monto: (0, library_1.Decimal)(cuota),
            numero: index + 1,
            fecha_prevista: fecha1,
            monto_capital: (0, library_1.Decimal)(montoCapital),
            monto_interes: (0, library_1.Decimal)(montoInteres),
            monto_restante: (0, library_1.Decimal)(cuota),
        };
        nuevasCuotas.push(nuevaCuota);
    }
    return {
        cuota: cuota,
        nuevasCuotas
    };
};
exports.generarCuotasReferencia = generarCuotasReferencia;

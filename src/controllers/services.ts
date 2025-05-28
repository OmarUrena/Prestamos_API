import { Decimal } from "@prisma/client/runtime/library"
import { prestamos } from "../generated/prisma"





const calcularMora = (monto : number, interes : number, dias : number ) =>{
    const mora : Number = monto*interes*dias/360
    console.log(mora)
}


export const generarCuotas = (prestamo : prestamos) =>{
    const nuevasCuotas = []
    let cuota = 0
    let interval = 0
    let interes  = Number(prestamo.interes)
    let montoRestante = Number(prestamo.monto)

    let fecha: Date = prestamo.fecha_inicio
    switch (prestamo.frecuencia_pago) {
        case 'mensual':
            interes = interes/12
            interval = 30
            break;

        case 'quincenal':
            interes = interes/26
            interval = 14
            break;
        
        case 'semanal':
            interes = interes/52
            interval = 7
            break;

        default:
            interes = interes/360
            interval = 1
            break;
    }

    if( prestamo.tipo_interes === 'simple'){
        cuota = (Number(prestamo.monto)*(1+(interes*prestamo.cant_cuotas)))/prestamo.cant_cuotas;
    } else{
        cuota = Number(prestamo.monto) * interes * ((1+interes)**prestamo.cant_cuotas)/((1+interes)**(prestamo.cant_cuotas)-1)
    }


    for (let index = 0; index < prestamo.cant_cuotas; index++) {
        const montoInteres = montoRestante*interes
        const montoCapital = cuota-montoInteres
        montoRestante = montoRestante-montoCapital
        

        fecha.setDate(fecha.getDate()+interval)

        let fecha1 = new Date(fecha) 
        const nuevaCuota = {
            id_prestamo: prestamo.id_prestamo,
            monto: Decimal(cuota),
            numero: index+1,
            fecha_prevista: fecha1,
            monto_capital: Decimal(montoCapital),
            monto_interes: Decimal(montoInteres),
            monto_restante: Decimal(cuota),



        }

    

        nuevasCuotas.push(nuevaCuota)
       
    }

   

    return {
        cuota: cuota,
        nuevasCuotas
    }
}


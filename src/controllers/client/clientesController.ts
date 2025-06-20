import { clientes, PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { verificarToken } from "../services";


const prisma = new PrismaClient()

export const  obtenerClientes = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
        if (verificacion && verificacion?.statusCode != 200) {
            res.status(verificacion?.statusCode).send(verificacion?.statusMessage);
    
        }
    const clientes = await prisma.clientes.findMany({
        include: {
            prestamos: true
        }
    })

    res.json(clientes)
}


export const obtenerCliente = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params["id"])
    const cliente = await prisma.clientes.findUnique({
        where: {
            id_cliente: id
        },
        include: {
            prestamos: true
        }
    })

    if(cliente != null){
        res.json(cliente)
    }
    else{
        res.status(404).send(`No se encontró el cliente con el id: ${id}`)
    }
}


export const nuevoCliente = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const datos : clientes = req.body

    
    console.log(datos)

    
    try{
        const resultado = await prisma.clientes.create({
        data: {
            nombre: datos.nombre,
            cedula: datos.cedula,
            telefono: datos.telefono,
            email: datos.email,          
            direccion: datos.direccion,
            foto_url: datos.foto_url,
            notas: datos.notas,
            referido_por: datos.referido_por
            


            
        }

    
    })

    if(resultado){
        res.status(200).send("Cliente agregado correctamente!")
    }
    else{
        res.status(500).send("No se pudo agregar el cliente")
    }
    }

    catch(e){
        res.status(500).send(`Ha ocurrido un error: ${e}`)
    }
    

}

export const actualizarCliente = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin", "agente"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params['id'])
    const datos = req.body
    const cliente = await prisma.clientes.update({
        where: {
            id_cliente: id
        },
        data: {
            ...datos
        }
    })

    res.json(cliente)
}



export const eliminarCliente = async (req: Request, res: Response) => {
    const verificacion = await verificarToken(req, res, ["admin"]);
    if (verificacion && verificacion?.statusCode != 200) {
        res.status(verificacion?.statusCode).send(verificacion?.statusMessage);

    }
    const id = Number(req.params['id'])

    const prestamos = await prisma.prestamos.deleteMany({
        where: {
            id_cliente: id,
        }
    })
    const cliente = await prisma.clientes.delete({
        where: {
            id_cliente : id
        }
    }
        
    )

    res.json(cliente)
}


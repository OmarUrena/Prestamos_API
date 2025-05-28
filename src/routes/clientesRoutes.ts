import { Router } from "express";
import { actualizarCliente, eliminarCliente, nuevoCliente, obtenerCliente, obtenerClientes } from "../controllers/client/clientesController";



const router = Router()


router.get("/", obtenerClientes)

router.get("/:id", obtenerCliente)

router.post("/", nuevoCliente)

router.put("/:id", actualizarCliente)

router.delete("/:id", eliminarCliente)


export default router;
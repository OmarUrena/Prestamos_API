import { Router } from "express";
import { actualizarPago, eliminarPago, nuevoPago, obtenerPago, obtenerPagos } from "../controllers/client/pagosController";


const router = Router()

router.get('/', obtenerPagos)

router.get('/:id', obtenerPago)

router.post('/', nuevoPago)

router.put('/:id', actualizarPago)

router.delete('/:id', eliminarPago)


export default router;

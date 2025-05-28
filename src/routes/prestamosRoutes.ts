import { Router } from "express";
import { actualizarPrestamo, eliminarPrestamo, nuevoPrestamo, obtenerCuotas, obtenerPagos, obtenerPrestamo, obtenerPrestamos } from "../controllers/client/prestamosController";

const router = Router()



//Prestamos
router.get("/", obtenerPrestamos)

router.post('/', nuevoPrestamo)

router.get('/:id', obtenerPrestamo)

router.get('/:id/cuotas', obtenerCuotas)

router.delete('/:id', eliminarPrestamo)

router.put('/:id', actualizarPrestamo)

router.get('/:id/pagos', obtenerPagos)

export default router;
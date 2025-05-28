import { Router } from "express"
import { nuevoMovimiento, obtenerMovimientos } from "../controllers/client/movimientosController"


const router = Router()


router.get('/', obtenerMovimientos)

router.post('/', nuevoMovimiento)


export default router;
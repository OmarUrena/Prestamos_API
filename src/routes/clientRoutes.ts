import { Router } from "express";
import  prestamosRoutes  from "./prestamosRoutes"
import  clientesRoutes from './clientesRoutes'
import pagosRoutes from './pagosRoutes'
import movimientosRoutes from './movimientosRoutes'
import usuariosRoutes from './usuariosRoutes'
import actividadRoutes from './actividadRoutes'
const router = Router()



//Prestamos


router.use('/prestamos', prestamosRoutes)

router.use('/clientes', clientesRoutes)

router.use('/pagos', pagosRoutes)

router.use('/movimientos', movimientosRoutes)

router.use('/usuarios', usuariosRoutes)

router.use('/actividad', actividadRoutes);

export default router;
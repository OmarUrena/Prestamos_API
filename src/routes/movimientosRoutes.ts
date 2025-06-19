import { Router } from "express";
import { nuevoMovimiento, obtenerMovimientos } from "../controllers/client/movimientosController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Movimientos
 *   description: Endpoints para la gestión de movimientos
 */

/**
 * @swagger
 * /client/movimientos:
 *   get:
 *     summary: Obtiene todos los movimientos
 *     tags: [Movimientos]
 *     responses:
 *       200:
 *         description: Lista de movimientos obtenida correctamente
 */
router.get('/', obtenerMovimientos);

/**
 * @swagger
 * /client/movimientos:
 *   post:
 *     summary: Crea un nuevo movimiento
 *     tags: [Movimientos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion:
 *                 type: string
 *               monto:
 *                 type: number
 *             example:
 *               descripcion: "Movimiento de prueba"
 *               monto: 1000
 *     responses:
 *       201:
 *         description: Movimiento creado exitosamente
 */
router.post('/', nuevoMovimiento);

export default router;
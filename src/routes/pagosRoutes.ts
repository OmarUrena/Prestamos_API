import { Router } from "express";
import { actualizarPago, eliminarPago, nuevoPago, obtenerPago, obtenerPagos, obtenerPagosPorFecha } from "../controllers/client/pagosController";



const router = Router()

/**
 * @swagger
 * /client/pagos/fecha:
 *   get:
 *     summary: Obtiene los pagos hechos en una fecha específica
 *     security:
 *       - bearerAuth: []
 *     tags: [Pagos]
 *     parameters:
 *       - in: query
 *         name: fecha
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha de los pagos (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Lista de pagos
 */
router.get('/fecha', obtenerPagosPorFecha);

/**
 * @swagger
 * tags:
 *   name: Pagos
 *   description: Endpoints para la gestión de pagos
 */

/**
 * @swagger
 * /client/pagos:
 *   get:
 *     summary: Obtiene todos los pagos
 *     security:
 *       - bearerAuth: []
 *     tags: [Pagos]
 *     responses:
 *       200:
 *         description: Lista de pagos
 */
router.get('/', obtenerPagos);

/**
 * @swagger
 * /client/pagos/{id}:
 *   get:
 *     summary: Obtiene un pago por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     responses:
 *       200:
 *         description: Pago encontrado
 *       404:
 *         description: Pago no encontrado
 */
router.get('/:id', obtenerPago);

/**
 * @swagger
 * /client/pagos:
 *   post:
 *     summary: Registra un nuevo pago
 *     security:
 *       - bearerAuth: []
 *     tags: [Pagos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Pago registrado
 */
router.post('/', nuevoPago);

/**
 * @swagger
 * /client/pagos/{id}:
 *   put:
 *     summary: Actualiza un pago por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Pago actualizado
 *       404:
 *         description: Pago no encontrado
 */
router.put('/:id', actualizarPago);

/**
 * @swagger
 * /client/pagos/{id}:
 *   delete:
 *     summary: Elimina un pago por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pago
 *     responses:
 *       200:
 *         description: Pago eliminado
 *       404:
 *         description: Pago no encontrado
 */
router.delete('/:id', eliminarPago);




export default router;

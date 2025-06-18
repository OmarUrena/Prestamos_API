"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagosController_1 = require("../controllers/client/pagosController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /client/pagos/fecha:
 *   get:
 *     summary: Obtiene los pagos hechos en una fecha específica
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
router.get('/fecha', pagosController_1.obtenerPagosPorFecha);
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
 *     tags: [Pagos]
 *     responses:
 *       200:
 *         description: Lista de pagos
 */
router.get('/', pagosController_1.obtenerPagos);
/**
 * @swagger
 * /client/pagos/{id}:
 *   get:
 *     summary: Obtiene un pago por ID
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
router.get('/:id', pagosController_1.obtenerPago);
/**
 * @swagger
 * /client/pagos:
 *   post:
 *     summary: Registra un nuevo pago
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
router.post('/', pagosController_1.nuevoPago);
/**
 * @swagger
 * /client/pagos/{id}:
 *   put:
 *     summary: Actualiza un pago por ID
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
router.put('/:id', pagosController_1.actualizarPago);
/**
 * @swagger
 * /client/pagos/{id}:
 *   delete:
 *     summary: Elimina un pago por ID
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
router.delete('/:id', pagosController_1.eliminarPago);
exports.default = router;

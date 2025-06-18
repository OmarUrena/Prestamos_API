"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamosController_1 = require("../controllers/client/prestamosController");
const router = (0, express_1.Router)();
/**
* @swagger
* tags:
*   name: Prestamos
*   description: Endpoints para la gestión de préstamos
*/
/**
 * @swagger
 * /client/prestamos/cuotas/fecha:
 *   get:
 *     summary: Obtiene las cuotas que vencen en una fecha específica
 *     tags: [Cuotas]
 *     parameters:
 *       - in: query
 *         name: fecha
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Fecha límite de la cuota
 *     responses:
 *       200:
 *         description: Lista de cuotas
 */
router.get('/cuotas/fecha', prestamosController_1.obtenerCuotasPendientes);
/**
 * @swagger
 * /client/prestamos/cuotas:
 *   post:
 *     summary: Visualiza las cuotas de un préstamo antes de crearlo
 *     tags: [Cuotas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Cuotas generadas para visualización
 */
router.post('/cuotas', prestamosController_1.visualizarCuotas);
/**
 * @swagger
 * /client/prestamos:
 *   get:
 *     summary: Obtiene todos los préstamos
 *     tags: [Prestamos]
 *     responses:
 *       200:
 *         description: Lista de préstamos
 */
router.get("/", prestamosController_1.obtenerPrestamos);
/**
 * @swagger
 * /client/prestamos:
 *   post:
 *     summary: Crea un nuevo préstamo
 *     tags: [Prestamos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Préstamo creado
 */
router.post('/', prestamosController_1.nuevoPrestamo);
/**
 * @swagger
 * /client/prestamos/{id}:
 *   get:
 *     summary: Obtiene un préstamo por ID
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del préstamo
 *     responses:
 *       200:
 *         description: Préstamo encontrado
 *       404:
 *         description: Préstamo no encontrado
 */
router.get('/:id', prestamosController_1.obtenerPrestamo);
/**
 * @swagger
 * /client/prestamos/{id}/cuotas:
 *   get:
 *     summary: Obtiene las cuotas de un préstamo
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del préstamo
 *     responses:
 *       200:
 *         description: Lista de cuotas
 */
router.get('/:id/cuotas', prestamosController_1.obtenerCuotas);
/**
 * @swagger
 * /client/prestamos/{id}:
 *   delete:
 *     summary: Elimina un préstamo por ID
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del préstamo
 *     responses:
 *       200:
 *         description: Préstamo eliminado
 *       404:
 *         description: Préstamo no encontrado
 */
router.delete('/:id', prestamosController_1.eliminarPrestamo);
/**
 * @swagger
 * /client/prestamos/{id}:
 *   put:
 *     summary: Actualiza un préstamo por ID
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del préstamo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Préstamo actualizado
 *       404:
 *         description: Préstamo no encontrado
 */
router.put('/:id', prestamosController_1.actualizarPrestamo);
/**
 * @swagger
 * /client/prestamos/{id}/pagos:
 *   get:
 *     summary: Obtiene los pagos de un préstamo
 *     tags: [Prestamos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del préstamo
 *     responses:
 *       200:
 *         description: Lista de pagos
 */
router.get('/:id/pagos', prestamosController_1.obtenerPagos);
exports.default = router;

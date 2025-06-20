import { Router } from "express";
import { actualizarPrestamo, eliminarPrestamo, nuevoPrestamo, obtenerCuotas, obtenerCuotasPendientes, obtenerPagos, obtenerPrestamo, obtenerPrestamos, visualizarCuotas } from "../controllers/client/prestamosController";

const router = Router();




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
router.get('/cuotas/fecha', obtenerCuotasPendientes);

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
router.post('/cuotas', visualizarCuotas);
/**
 * @swagger
 * /client/prestamos:
 *   get:
 *     summary: Obtiene todos los préstamos
 *     security:
 *       - bearerAuth: []
 *     tags: [Prestamos]
 *     responses:
 *       200:
 *         description: Lista de préstamos
 */
router.get("/", obtenerPrestamos);

/**
 * @swagger
 * /client/prestamos:
 *   post:
 *     summary: Crea un nuevo préstamo
 *     security:
 *       - bearerAuth: []
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
router.post('/', nuevoPrestamo);

/**
 * @swagger
 * /client/prestamos/{id}:
 *   get:
 *     summary: Obtiene un préstamo por ID
 *     security:
 *       - bearerAuth: []
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
router.get('/:id', obtenerPrestamo);

/**
 * @swagger
 * /client/prestamos/{id}/cuotas:
 *   get:
 *     summary: Obtiene las cuotas de un préstamo
 *     security:
 *       - bearerAuth: []
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
router.get('/:id/cuotas', obtenerCuotas);

/**
 * @swagger
 * /client/prestamos/{id}:
 *   delete:
 *     summary: Elimina un préstamo por ID
 *     security:
 *       - bearerAuth: []
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
router.delete('/:id', eliminarPrestamo);

/**
 * @swagger
 * /client/prestamos/{id}:
 *   put:
 *     summary: Actualiza un préstamo por ID
 *     security:
 *       - bearerAuth: []
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
router.put('/:id', actualizarPrestamo);

/**
 * @swagger
 * /client/prestamos/{id}/pagos:
 *   get:
 *     summary: Obtiene los pagos de un préstamo
 *     security:
 *       - bearerAuth: []
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
router.get('/:id/pagos', obtenerPagos);





export default router;
import { Router } from "express";
import { obtenerActividades, registrarActividad } from "../controllers/client/actividadController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Actividad
 *   description: Endpoints para la gestión de actividades de usuarios
 */

/**
 * @swagger
 * /client/actividad:
 *   get:
 *     summary: Obtiene todas las actividades
 *     tags: [Actividad]
 *     responses:
 *       200:
 *         description: Lista de actividades obtenidas correctamente
 *       500:
 *         description: Error al obtener las actividades
 */
router.get('/', obtenerActividades);

/**
 * @swagger
 * /client/actividad:
 *   post:
 *     summary: Registra una nueva actividad
 *     tags: [Actividad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accion:
 *                 type: string
 *               id_usuario:
 *                 type: number
 *               fecha_hora:
 *                 type: string
 *                 format: date-time
 *             example:
 *               accion: "Inicio de sesión"
 *               id_usuario: 123
 *               fecha_hora: "2025-05-25T08:00:00.000Z"
 *     responses:
 *       201:
 *         description: Actividad registrada exitosamente
 *       500:
 *         description: Error al registrar la actividad
 */
router.post('/', registrarActividad);

export default router;
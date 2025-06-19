import { Router } from "express";
import { desactivarUsuario, obtenerUsuarios, actualizarUsuario, activarUsuario } from "../controllers/client/usuariosController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para la gestión de usuarios
 */

/**
 * @swagger
 * /client/usuarios:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 */
router.get('/', obtenerUsuarios);

/**
 * @swagger
 * /client/usuarios/{id}:
 *   put:
 *     summary: Actualiza un usuario por su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               nombre: "Juan Perez"
 *               email: "juan@example.com"
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id', actualizarUsuario);

/**
 * @swagger
 * /client/usuarios/disable/{id}:
 *   put:
 *     summary: Desactiva un usuario por su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario a desactivar
 *     responses:
 *       200:
 *         description: Usuario desactivado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/disable/:id', desactivarUsuario);

/**
 * @swagger
 * /client/usuarios/enable/{id}:
 *   put:
 *     summary: Activa un usuario por su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario a activar
 *     responses:
 *       200:
 *         description: Usuario activado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/enable/:id', activarUsuario);

export default router;
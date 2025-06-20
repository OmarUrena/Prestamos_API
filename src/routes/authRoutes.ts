import { Router } from "express";
import { login, logout, refresh, register } from "../controllers/authControllers";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticación
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicia sesión y obtiene un token de autenticación
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: "usuario"
 *               password: "contraseña123"
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente, devuelve token JWT
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/login', login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre_usuario
 *               - rol
 *               - password
 *             properties:
 *               nombre_usuario:
 *                 type: string
 *               rol:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               nombre_usuario: "Usuario Nuevo"
 *               rol: "admin"
 *               password: "contraseña123"
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/register', register);

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Refresca el token de autenticación utilizando el refreshToken
 *     security:
 *      - bearerAuth: []
 *     tags: [Auth]
 *     parameters:
 *      - in: cookie
 *        name: refreshToken
 *        schema:
 *         type: string
 *        required: true
 *        description: Refresh token para obtener un nuevo token de acceso
 *     responses:
 *       200:
 *         description: Token actualizado exitosamente
 *       401:
 *         description: Refresh token inválido o expirado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/refresh', refresh);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Cierra la sesión actual del usuario
 *     security:
 *       - bearerAuth: []
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
 *       500:
 *         description: Error al cerrar la sesión
 */
router.post('/logout', logout)

export default router;
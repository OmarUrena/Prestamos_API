import { Router } from "express";
import { actualizarCliente, eliminarCliente, nuevoCliente, obtenerCliente, obtenerClientes } from "../controllers/client/clientesController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para la gestión de clientes
 */

/**
 * @swagger
 * /client/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
 *     security:
 *       - bearerAuth: []
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida correctamente
 */
router.get("/", obtenerClientes);

/**
 * @swagger
 * /client/clientes/{id}:
 *   get:
 *     summary: Obtiene un cliente por su ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente no encontrado
 */
router.get("/:id", obtenerCliente);

/**
 * @swagger
 * /client/clientes:
 *   post:
 *     summary: Crea un nuevo cliente
 *     security:
 *       - bearerAuth: []
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               nombre: "Juan Perez"
 *               email: "juan.perez@example.com"
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 */
router.post("/", nuevoCliente);

/**
 * @swagger
 * /client/clientes/{id}:
 *   put:
 *     summary: Actualiza un cliente existente por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               nombre: "Juan Perez Actualizado"
 *               email: "juan.actualizado@example.com"
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *       404:
 *         description: Cliente no encontrado
 */
router.put("/:id", actualizarCliente);

/**
 * @swagger
 * /client/clientes/{id}:
 *   delete:
 *     summary: Elimina un cliente por su ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente a eliminar
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 *       404:
 *         description: Cliente no encontrado
 */
router.delete("/:id", eliminarCliente);

export default router;
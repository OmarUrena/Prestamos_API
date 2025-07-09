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
 *     summary: Crea un nuevo cliente junto con sus ubicaciones
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
 *               cliente:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     description: Nombre del cliente
 *                   apellido:
 *                     type: string
 *                     description: Apellido del cliente
 *                   cedula:
 *                     type: string
 *                     description: Cédula del cliente
 *                   telefono:
 *                     type: string
 *                     description: Teléfono del cliente
 *                   email:
 *                     type: string
 *                     description: Correo electrónico del cliente
 *                   foto_url:
 *                     type: string
 *                     description: URL de la foto del cliente
 *                   notas:
 *                     type: string
 *                     description: Notas adicionales sobre el cliente
 *                   referido_por:
 *                     type: string
 *                     description: Nombre de la persona que refirió al cliente
 *               ubicaciones:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     latitud:
 *                       type: number
 *                       description: Latitud de la ubicación
 *                     longitud:
 *                       type: number
 *                       description: Longitud de la ubicación
 *                     descripcion:
 *                       type: string
 *                       description: Descripción de la ubicación
 *                     direccion:
 *                       type: string
 *                       description: Dirección de la ubicación
 *             example:
 *               cliente:
 *                 nombre: "Juan"
 *                 apellido: "Pérez"
 *                 cedula: "001-1234567-8"
 *                 telefono: "809-123-4567"
 *                 email: "juan.perez@example.com"
 *                 foto_url: "https://example.com/foto.jpg"
 *                 notas: "Cliente preferencial"
 *                 referido_por: "Pedro Gómez"
 *               ubicaciones:
 *                 - latitud: 18.4834
 *                   longitud: -69.9396
 *                   descripcion: "Casa principal"
 *                   direccion: "Calle 123, Santo Domingo"
 *                 - latitud: 18.5000
 *                   longitud: -69.9500
 *                   descripcion: "Oficina"
 *                   direccion: "Av. Independencia, Santo Domingo"
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error interno del servidor
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
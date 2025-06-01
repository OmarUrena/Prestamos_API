import { Router } from "express";
import { desactivarUsuario, obtenerUsuarios, actualizarUsuario, activarUsuario } from "../controllers/client/usuariosController";

const router = Router()


router.get('/', obtenerUsuarios)

router.put('/:id', actualizarUsuario)

router.put('/disable/:id', desactivarUsuario)

router.put('/enable/:id', activarUsuario)


export default router;
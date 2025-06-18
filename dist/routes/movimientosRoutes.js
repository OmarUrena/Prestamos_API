"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movimientosController_1 = require("../controllers/client/movimientosController");
const router = (0, express_1.Router)();
router.get('/', movimientosController_1.obtenerMovimientos);
router.post('/', movimientosController_1.nuevoMovimiento);
exports.default = router;

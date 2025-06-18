"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamosRoutes_1 = __importDefault(require("./prestamosRoutes"));
const clientesRoutes_1 = __importDefault(require("./clientesRoutes"));
const pagosRoutes_1 = __importDefault(require("./pagosRoutes"));
const movimientosRoutes_1 = __importDefault(require("./movimientosRoutes"));
const usuariosRoutes_1 = __importDefault(require("./usuariosRoutes"));
const router = (0, express_1.Router)();
//Prestamos
router.use('/prestamos', prestamosRoutes_1.default);
router.use('/clientes', clientesRoutes_1.default);
router.use('/pagos', pagosRoutes_1.default);
router.use('/movimientos', movimientosRoutes_1.default);
router.use('/usuarios', usuariosRoutes_1.default);
exports.default = router;

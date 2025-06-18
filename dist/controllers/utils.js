"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMora = void 0;
const calcularMora = (monto, interes, dias) => {
    const mora = monto * interes * dias / 360;
    console.log(mora);
};
exports.calcularMora = calcularMora;
